import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionUtilService {
    subscriptions: Subscription[] = [];

  register(sub: Subscription): Subscription {
    this.subscriptions = [...this.subscriptions, sub];
    return sub;
  }

  destroy(): void {
    for (let i = 0; i < this.subscriptions.length; i++) {
      this.subscriptions[i].unsubscribe();
    }
  }
}
