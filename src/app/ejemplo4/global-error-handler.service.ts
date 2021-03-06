import { Injectable, NgZone } from '@angular/core';
import { ErrorDialogService } from './error-dialog/error-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService {
  constructor(
    private errorDialogService: ErrorDialogService,
    private zone: NgZone
  ) {}

  handleError(error: Error) {
    this.zone.run(() =>
      this.errorDialogService.openDialog('😈😈😈')
    );

    console.error('Error capturado por el GlobalError Handler', error);
  }
}
