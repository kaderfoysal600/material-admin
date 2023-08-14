export class TableUtil {
  static exportToPdf(tableHtml: string, name?: string) {
    console.log('tableHtml', tableHtml)
    const popupWin = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
        </head>
        <body onload="window.print(); window.close()">
          <table class="table table-bordered">${tableHtml}</table>
        </body>
      </html>`
    );
    popupWin.document.close();
  }
}