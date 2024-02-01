(function($) {
	var dataArguments = [
		{
			"id": 1,
			"name": "Love",
			"description": "&#128151",
			"order": 1
		},
		{
			"name": "Joy",
			"id": 2,
			"description": "&#128512;",
			"order": 2
		},
		{
			"id": 3,
			"name": "Liberty",
			"description": "&#128509;",
			"order": 3
		}
	];

	var table = $('#ArgumentsTable').DataTable({
		paging: false,
		data: dataArguments,
		columns: [
			{
				name: 'action',
				data: null,
				title: 'Action',
				searchable: false,
				sortable: false,
				render: function(data, type, full, meta) {
					if (type === 'display') {
						var $span = $('<span></span>');

						if (meta.row > 0) {
							$('<a class="dtMoveUp"><div id="dialog3" class="triangle_up1"></div></a>').appendTo($span);
						}

						$('<a class="dtMoveDown">	<div id="dialog2" class="triangle_down1"></div></a>').appendTo($span);

						return $span.html();
					}
					return data;
				}
			},
			{
				name: 'order',
				title: 'Order',
				data: 'order',
				sortable: false
			},
			{
				name: 'id',
				data: 'id',
				visible: false
			},
			{
				name: 'order',
				data: 'order',
				visible: false
			},
			{
				name: 'name',
				data: 'name',
				title: 'Name',
				searchable: true,
				sortable: false
			},
			{
				name: 'description',
				data: 'description',
				title: 'Description',
				searchable: true,
				sortable: false
			}
		],
		'drawCallback': function(settings) {
			$('#ArgumentsTable tr:last .dtMoveDown').remove();

			// Remove previous binding before adding it
			$('.dtMoveUp').unbind('click');
			$('.dtMoveDown').unbind('click');

			// Bind clicks to functions
			$('.dtMoveUp').click(moveUp);
			$('.dtMoveDown').click(moveDown);
		}
	});

	// Move the row up
	function moveUp() {
		var tr = $(this).parents('tr');
		moveRow(tr, 'up');
	}

	// Move the row down
	function moveDown() {
		var tr = $(this).parents('tr');
		moveRow(tr, 'down');
	}

	// Move up or down (depending...)
	function moveRow(row, direction) {
		var index = table.row(row).index();

		var order = -1;
		if (direction === 'down') {
			order = 1;
		}

		var data1 = table.row(index).data();
		data1.order += order;

		var data2 = table.row(index + order).data();
		data2.order += -order;

		table.row(index).data(data2);
		table.row(index + order).data(data1);

		table.page(0).draw(false);
	}
})
	(jQuery);