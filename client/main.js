let blip = null;
let radiusBlip = null;

RegisterCommand('norp', (source, args, rawCommand) => {
    const waypoint = GetFirstBlipInfoId(8);
    const [x, y, z] = DoesBlipExist(waypoint) ? GetBlipInfoIdCoord(waypoint) : GetEntityCoords(PlayerPedId());

    emitNet('norp:set', x, y, z);
}, false);

RegisterCommand('clearnorp', (source, args, rawCommand) => {
    emitNet('norp:clear');
}, false);

RegisterNetEvent('norp:set')
on('norp:set', (x, y, z) => {
    RemoveBlip(blip);
    RemoveBlip(radiusBlip);

    blip = AddBlipForCoord(x, y, z);
    SetBlipColour(blip, 1);
    SetBlipSprite(blip, 364)
    SetBlipAsShortRange(blip, true)
    SetBlipScale(blip, Config.XBlipScale);
    BeginTextCommandSetBlipName('STRING');
    AddTextComponentString(Locales.getMessage('blip_text'));
    EndTextCommandSetBlipName(blip);

    radiusBlip = AddBlipForRadius(x, y, z, Config.NoRpRadius);
    SetBlipAlpha(radiusBlip, 80);
    SetBlipColour(radiusBlip, 1);

    emit('chatMessage', Locales.getMessage('in_effect', [Math.floor(x), Math.floor(y)]));
});

RegisterNetEvent('norp:clear')
on('norp:clear', () => {
    RemoveBlip(radiusBlip);
    RemoveBlip(blip);
    emit('chatMessage', Locales.getMessage('no_longer_in_effect'));
});

emit('chat:addSuggestion', '/norp', Locales.getMessage('norp_help'));
emit('chat:addSuggestion', '/clearnorp', Locales.getMessage('clearnorp_help'));