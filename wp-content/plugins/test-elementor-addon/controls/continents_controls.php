<?php
    class Elementor_Continents_Control extends \Elementor\Base_Data_Control {
    
    	// protected function get_default_settings() {

        //     return [
        //         'label_block' => true,
        //         'separator' => 'after',
        //         'new_settings_value' => '',
        //         'new_multiple_values' => [],
        //     ];
    
        // }

	public function get_type() {
        return 'continents-control';
    }

    protected function get_default_settings() {
		return [
			'continents' => [ 'Asia', 'Africa', 'Europe', 'North America', 'South America', 'Australia/Oceania', 'Antarctica', ]
		];
	}

    public function get_default_value() {
		return 'Europe';
	}

	public function content_template() {

    $control_uid = $this->get_control_uid();
		?>

<h1>custom continents  control</h1>
		<div class="elementor-control-field">

			<# if ( data.label ) {#>
				<label for="<?php echo $control_uid; ?>" class="elementor-control-title">{{{ data.label }}}</label>
			<# } #>

			<div class="elementor-control-input-wrapper elementor-control-unit-5 elementor-control-dynamic-switcher-wrapper">
				<input id="<?php echo $control_uid; ?>" type="{{ data.input_type }}" class="tooltip-target elementor-control-tag-area" data-tooltip="{{ data.title }}" title="{{ data.title }}" data-setting="{{ data.name }}" placeholder="{{ data.placeholder }}" />
			</div>

      <div class="elementor-control-input-wrapper">
				<select id="<?php echo $control_uid; ?>" data-setting="{{ data.name }}">
					<option value=""><?php echo esc_html__( 'Select currency', 'elementor-currency-control' ); ?></option>
					<# _.each( data.continents, function( currency_label, currency_value ) { #>
					<option value="{{ currency_value }}">{{{ currency_label }}}</option>
					<# } ); #>
				</select>
			</div>

		</div>

		<# if ( data.description ) { #>
			<div class="elementor-control-field-description">{{{ data.description }}}</div>
		<# } #>

            <?php
        // } */
  }
    

}