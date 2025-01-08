import { Mark } from '@tiptap/core';

const HighlightExtension = Mark.create({
  name: 'highlight',

  addOptions() {
    return {
      HTMLAttributes: {
        class: 'highlighted-text',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span.highlighted-text',
      },
    ];
  },

  
  renderHTML({ HTMLAttributes }) {
    return ['span', {...this.options.HTMLAttributes,...HTMLAttributes}, 0];
  },

  addCommands() {
    return {
      toggleHighlight: () => ({ commands }) => {
        return commands.toggleMark(this.name);
      },
    };
  },
});


export default HighlightExtension;
