import { Component, OnDestroy, TemplateRef } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss'],
  host: {
    class: 'toast-container position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200; margin-top: 60px;',
  },
})
export class ToastsComponent implements OnDestroy {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }
}
