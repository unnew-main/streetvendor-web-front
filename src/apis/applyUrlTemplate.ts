import urlTemplate from 'url-template';

export default function applyUrlTemplate(config: any) {
    if (config.pathParams) {
        config.url = urlTemplate.parseTemplate(config.url).expand(config.params);
        config.pathParams.forEach((key: string) => delete config.params[key]);
    }
    return config;
}
