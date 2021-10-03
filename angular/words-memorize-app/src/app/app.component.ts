import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Приложения для запоминания иностранных слов';

  navigationLinks = [
    { path: 'recently-added', label: 'Последние добавленные слова' },
    { path: 'training', label: 'Упражнения' },
    { path: 'settings', label: 'Настройки' },
  ];
};