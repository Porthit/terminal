import * as bin from './index';
import packageJson from '../../../package.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const ls = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'You are our guest! 🙈 ';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:info@naascloud.com');

  return 'Opening info@naascloud.com';
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=nm6DO_7px1I', '_blank');

  return `Very smart! you got the power!`;
};

export const support = async (args?: string[]): Promise<string> => {
  window.open('http://support.naascloud.com/', '_blank');

  return `You are redirected to our remote support site!`;
};

export const upload = async (args?: string[]): Promise<string> => {
  window.open('https://upload.naascloud.com/', '_blank');

  return `NaasCloud Files is a very simple way to upload and share large files!`;
};

export const repo = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/naascloud/naascloud', '_blank');

  return 'Opening repository...';
};

export const helpdesk = async (args?: string[]): Promise<string> => {
  window.open('https://helpdesk.naascloud.com/', '_blank');

  return 'Opening repository...';
};

export const blog = async (args?: string[]): Promise<string> => {
  window.open('https://porthit.com/', '_blank');

  return 'Opening our technical Blog...';
};

export const banner = (args?: string[]): string => {
  return `
  ███╗   ██╗ █████╗  █████╗ ███████╗ ██████╗██╗      ██████╗ ██╗   ██╗██████╗ 
  ████╗  ██║██╔══██╗██╔══██╗██╔════╝██╔════╝██║     ██╔═══██╗██║   ██║██╔══██╗
  ██╔██╗ ██║███████║███████║███████╗██║     ██║     ██║   ██║██║   ██║██║  ██║
  ██║╚██╗██║██╔══██║██╔══██║╚════██║██║     ██║     ██║   ██║██║   ██║██║  ██║
  ██║ ╚████║██║  ██║██║  ██║███████║╚██████╗███████╗╚██████╔╝╚██████╔╝██████╔╝
  ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ 
                                                                              

Type 'help' to see list of available commands.

you cannot write to the terminal ? no problem, just click next to the username :)

--
NaasCloud is just a company name that we use to show our great work 💪
you probably heard about contoso and fabrikam ? then probably you know what I mean 😏
--
For a simplified version, click <a class="text-light-blue dark:text-dark-blue underline" href="https://porthit.com>Here</a>.
--
`;
};
