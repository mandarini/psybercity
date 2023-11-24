import { Component } from '@angular/core';
import { MediaWidthService } from './services/media-width.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'psybercity';
  width = this.mediaWidth.getTypeOfDevice();
  constructor(public mediaWidth: MediaWidthService) {}
}
