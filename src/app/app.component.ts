import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppGlobals } from '../common/app-global';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../common/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FromLogin';
  defaultLang: string = 'vi';
  constructor(
    public translate: TranslateService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.initTranslate();
  }

  ngOnDestroy(): void {}

  /**
   * Inits translate init ngôn ngữ để load về giao diện khi bật application
   * @returns
   */
  initTranslate() {
    const savedLang = AppGlobals.getLang().toString();

    if (!savedLang || savedLang == '') {
      this.translate.setDefaultLang(this.defaultLang);
      AppGlobals.setLang(this.defaultLang);
      return;
    }
    this.translate.setDefaultLang(savedLang);
  }
}
