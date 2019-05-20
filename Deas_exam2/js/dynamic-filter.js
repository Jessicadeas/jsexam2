(function() {
	//STORE EACH feature AS AN OBJECT IN AN ARRAY
	var services = [
	{
		name: 'Appraisal',
		cost: 90
	},
	{
		name: 'Site Review',
		cost: 125
	},
	{
		name: 'Deed Transfer',
		cost: 195
	},
	{
		name: 'Purchase Agreement',
		cost: 315
	},
	{
		name: 'Lease Agreement',
		cost: 395
	}
];
	
	var rows = [],
	$min = $('#minval'),
	$max = $('#maxval'),
	$table = $('#theservices');
	
	function makeRows() {
		services.forEach(function(feature) {
			var $row= $('<tr></tr>');
			$row.append($('<td></td>').text(feature.name) );
			$row.append($('<td></td>').text(feature.cost) );
			rows.push({
				feature: feature,
				$element: $row
			});
		});
}
		
	function appendRows() {
		var $tbody = $('<tbody></tbody>');
		rows.forEach(function(row) {
			$tbody.append(row.$element);
		});
		$table.append($tbody);
	}
	
	function update(min, max) {
		rows.forEach(function(row) {
			if (row.feature.cost >= min && row.feature.cost<=max) {
				row.$element.show();
			} else {
				row.$element.hide();
			}
		});
	}
	
	function init() {
		$('#slider').noUiSlider({
			range: [100, 400], start: [100, 200], handles: 2, margin: 20, connect: true,
			serialization: {to: [$min, $max],resolution:1}
		}).change(function() { update($min.val(), $max.val()); });
		makeRows();
		appendRows();
		update($min.val(), $max.val());
	}
	
	$(init);
}());