import { Mark } from '@tiptap/core';

const BoldExtension = Mark.create({
  name: 'bold',

  addOptions() {
    return {
      HTMLAttributes: {
        class: 'bold-text',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span.bold-text',
      },
    ];
  },

  
  renderHTML({ HTMLAttributes }) {
    return ['span', {...this.options.HTMLAttributes,...HTMLAttributes}, 0];
  },

  addCommands() {
    return {
      toggleBold: () => ({ editor }) => {
        const isBold = editor.isActive('bold'); 
  
        if (isBold) {
     
          editor.chain().focus().unsetMark('bold').run();
        } else {
          
          editor.chain().focus().setMark('bold').run();
        }
  
        return true; 
      },
    };
  }
});


export default BoldExtension;
