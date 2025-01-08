import { Node } from '@tiptap/core';

const ImageExtension = Node.create({
  name: 'image',
  inline: false,
  group: 'block',

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },

  renderHTML({ node }) {
    return ['img', {
      src: node.attrs.src,
      alt: node.attrs.alt,
      title: node.attrs.title,
      class: 'max-w-full h-auto !important',
    }];
  },
  

  addCommands() {
    return {
      insertImage: (src, alt = '', title = '') => ({ editor }) => {
        editor.chain().focus().insertContent(`<img src="${src}" alt="${alt}" title="${title}" />`).run();
        return true;
      },
    };
  },
});

export default ImageExtension;
