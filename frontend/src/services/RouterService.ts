import { router } from "../router";

export class RouterService {

  private constructor() {
  }

  static goToGamesList(): void {
    router.push({name: 'games'});
  }

  static goToGameCreation(): void {
    router.push({name: 'createGame'});
  }
}
