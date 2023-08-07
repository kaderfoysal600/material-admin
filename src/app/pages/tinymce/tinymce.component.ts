import { Component, OnInit } from '@angular/core';
import { Editor } from 'tinymce';
@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {
  editor: Editor;
  settings: any;
  constructor() { }

  ngOnInit(): void {
    this.setupEditor();
  }

  setupEditor() {
    this.settings = {
      base_url: '/tinymce',
      suffix: '.min',
      height: 500,
      menubar: false,
      toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
      plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
      external_plugins: {},
      setup: (editor: Editor) => {
        this.editor = editor;
      }
    };
  }

}
