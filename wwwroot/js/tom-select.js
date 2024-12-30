document.querySelectorAll(".select-tags").forEach(el => {
  const tomSelectInstance = new TomSelect(el, {
    plugins: ['remove_button'],
    create: true,
    onItemAdd: function (value) {
      this.setTextboxValue('');
      this.refreshOptions();

    },
    render: {
      option: function (data, escape) {
        return '<div class="d-flex"><span>' + escape(data.value) + '</span><span class="ms-auto text-muted">' + escape(data.date) + '</span></div>';
      },
      item: function (data, escape) {
        return '<div>' + escape(data.value) + '</div>';
      }
    }
  });

  el.tomselect = tomSelectInstance;
});

