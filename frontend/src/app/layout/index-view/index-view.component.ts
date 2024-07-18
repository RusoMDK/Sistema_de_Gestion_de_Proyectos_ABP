import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicatioMessages } from '../../core/utils/messages/applicationMessages';
import { LoadingSpinnerService } from '../../core/spinner/spinner.service';

@Component({
  selector: 'app-index-view',
  templateUrl: './index-view.component.html',
})
export class IndexViewComponent {
  applicationMessages = ApplicatioMessages;

  constructor(
    private activatedRoute: ActivatedRoute,
    public loadingSpinner: LoadingSpinnerService,
  ) {}
}
