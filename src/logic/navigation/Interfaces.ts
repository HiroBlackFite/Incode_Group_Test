export enum RootStackRoute {
  home = 'home',
  details = 'details',
}

export type TRootStack = {
  [RootStackRoute.home]: undefined;
  [RootStackRoute.details]: {
    name: string;
  };
};

export interface IRootNavigation {}
