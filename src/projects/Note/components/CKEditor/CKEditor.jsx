import React from 'react';
// import styles from './CKEditor.module.sass';

import CKEditorReact from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';

const editorConfiguration = {
  plugins: [
    Essentials,
    Bold,
    Italic,
    BlockQuote,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Link,
    List,
    Paragraph,
    Alignment,
    Base64UploadAdapter,
    MediaEmbed
  ],
  toolbar: [
    'heading',
    '|',
    'alignment',
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    'imageUpload',
    'blockQuote',
    'mediaEmbed',
    'undo',
    'redo'
  ],
  image: {
    toolbar: ['imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative']
  }
};

const CKEditor = props => {
  return (
    <CKEditorReact
      editor={ClassicEditor}
      config={editorConfiguration}
      {...props}
    />
  );
};

export default CKEditor;
