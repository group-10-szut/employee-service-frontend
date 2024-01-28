import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  constructor() {
  }

  // mit BehaviorSubject und Observable ist sichergestellt, dass jede Komponente,
  // die diesen Service nutzt, den aktuellen Wert erhält
  private qualificationFormStatus = new BehaviorSubject<boolean>(false);
  isQualificationFormShowed = this.qualificationFormStatus.asObservable();

  // ändert den Wert des Observables
  changeShowQualificationForm(show: boolean) {
    this.qualificationFormStatus.next(show);
  }
}
