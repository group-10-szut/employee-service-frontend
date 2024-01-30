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
  private employeeFormStatus = new BehaviorSubject<boolean>(false);
  isEmployeeFormShowed = this.employeeFormStatus.asObservable();

  // ändert den Wert des Observables
  changeShowEmployeeForm(show: boolean) {
    this.employeeFormStatus.next(show);
  }
}
