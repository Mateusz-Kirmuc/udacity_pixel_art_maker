// variables
const color_input = $("#colorPicker");
const width_input = $("#input_width");
const height_input = $("#input_height");
const table = $("#pixel_canvas");
const form = $("#sizePicker");
let color = color_input.val();

// set submit event handler
form.submit(function(event) {
  // prevent page reload
  event.preventDefault();
  // get values from form
  let table_width = parseInt(width_input.val());
  let table_height = parseInt(height_input.val());

  // call makeGrid to generate table
  makeGrid(table_width, table_height);
});

// set color input event handler
color_input.change(function() {
  // when input value change, set new value to color var
  color = $(this).val();
});

// create makeGrid function
function makeGrid(table_width, table_height) {
  // clear old table
  // NOTE: project specification requires while loop to clear table. I think
  // this may be easier solution: $("tr").remove();
  while ($("tr").length) {
    $("tr:last-child").remove();
  }

  // create new table
  for (let i = 1; i <= table_height; i++) {
    table.append('<tr></tr>');
    for (let j = 1; j <= table_width; j++) {
      $("tr:last-child").append("<td></td>");
    }
  }
  // set cells event handlers
  $("td").click(function() {
    $(this).css("background-color", color)
  })
  console.log($("tr").length)
}
