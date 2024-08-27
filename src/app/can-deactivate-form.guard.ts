import { CanDeactivateFn } from '@angular/router';

export const canDeactivateFormGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  return component.canDeactivate ? component.canDeactivate() : true;

};
