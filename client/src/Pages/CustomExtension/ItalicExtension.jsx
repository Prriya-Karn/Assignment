import { Mark } from '@tiptap/core';

const ItalicExtension = Mark.create({
  name: 'anchor',

  addOptions() {
    return {
      HTMLAttributes: {
        class: 'italic-text',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'i',
      },
    ];
  },

  
  renderHTML({ HTMLAttributes }) {
    return ['i', {...this.options.HTMLAttributes,...HTMLAttributes}, 0];
  },

  addCommands() {
    return {
      toggleItalic: () => ({ editor }) => {
        const isItalicActive = editor.isActive('italic');
  
        if (isItalicActive) {
          editor.chain().focus().unsetMark('italic').run();
        } else {
          editor.chain().focus().setMark('italic').run();
        }
  
        return true;
      },
    };
  }
  

});


export default ItalicExtension;
