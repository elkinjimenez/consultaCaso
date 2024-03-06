import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import QRCode from 'qrcode';

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.css'
})
export class GenerateComponent {

  qrData = '';
  qrImage: string = '';

  constructor() {
    // this.generateQRCode();
  }

  generateQRCode() {
    QRCode.toDataURL(this.qrData)
      .then(url => {
        this.qrImage = url;
      })
      .catch(err => {
        console.error(err);
      });
  }

  downloadImage() {
    fetch(this.qrImage)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'QR';
        link.click();
        window.URL.revokeObjectURL(blobUrl);
      });
  }

}
