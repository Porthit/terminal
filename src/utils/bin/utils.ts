import * as bin from './index';
import packageJson from '../../../package.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://m4tt72.com', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:info@naascloud.com');

  return 'Opening info@naascloud.com';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=nm6DO_7px1I', '_blank');

  return `Very smart! you got the power!`;
};

export const repo = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/m4tt72/terminal', '_blank');

  return 'Opening repository...';
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

Terminal not sending input ? no problem, just reload the page :)

--
Now the project is open-source 🎉 type 'repo' to check out the repository.
--
For a simplified version, click <a class="text-light-blue dark:text-dark-blue underline" href="https://m4tt72.com">Here</a>.
--
`;
};
