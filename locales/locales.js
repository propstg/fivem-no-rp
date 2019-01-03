const Locales = {
    getMessage: (message, args) => Locales[Config.Locale][message](args)
};