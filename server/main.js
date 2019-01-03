const notAllowedMessage = Locales.getMessage('not_allowed');

onNet('norp:clear', () => {
    if (!isAllowed(source)) {
        return emitNet('chatMessage', source, notAllowedMessage);
    }

    emitNet('norp:clear', -1);
});

onNet('norp:set', (x, y, z) => {
    if (!isAllowed(source)) {
        return emitNet('chatMessage', source, notAllowedMessage);
    }

    emitNet('norp:set', -1, x, y, z);
});

const isAllowed = source => IsPlayerAceAllowed(source, 'command.norp');