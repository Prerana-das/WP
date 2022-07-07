<?php

    class Basic_Widget extends \Elementor\Widget_Base{
        public function get_name(){
            return 'basicwd';
        }
        public function get_title() {
            return 'basic widgets';
        }

        public function get_icon() {
            return 'eicon-code';
        }


        public function get_categories() {
            return [ 'basic' ];
        }
    
        public function get_keywords() {
            return [ 'hello', 'world' ];
        }

        protected function _register_controls(){
            $this->start_controls_section(
                'conent_section',
                [
                    'label' => __('Content','plugin-name'),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );

            $this->add_control(
                'url',
                [
                    'label'=>__('URL to embed','plugin-name'),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'url',
                    'placeholder'=> __('https://your-link.com','plugin-name'),
                ]
            );

            $this->add_control(
                'text_color',
                [
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'label' => esc_html__( 'Text Color', 'plugin-name' ),
                    'default' => '#fefefe',
                ]
            );

            $this->add_control(
                'size',
                [
                    'type' => \Elementor\Controls_Manager::NUMBER,
                    'label' => esc_html__( 'Size', 'plugin-name' ),
                    'placeholder' => '0',
                    'min' => 0,
                    'max' => 100,
                    'step' => 1,
                    'default' => 50,
                ]
            );

            $this->add_control(
                'open_lightbox',
                [
                    'type' => \Elementor\Controls_Manager::SELECT,
                    'label' => esc_html__( 'Lightbox', 'plugin-name' ),
                    'options' => [
                        'default' => esc_html__( 'Default', 'plugin-name' ),
                        'yes' => esc_html__( 'Yes', 'plugin-name' ),
                        'no' => esc_html__( 'No', 'plugin-name' ),
                    ],
                    'default' => 'no',
                ]
            );

            $this->add_control(
                'alignment',
                [
                    'type' => \Elementor\Controls_Manager::CHOOSE,
                    'label' => esc_html__( 'Alignment', 'plugin-name' ),
                    'options' => [
                        'left' => [
                            'title' => esc_html__( 'Left', 'plugin-name' ),
                            'icon' => 'eicon-text-align-left',
                        ],
                        'center' => [
                            'title' => esc_html__( 'Center', 'plugin-name' ),
                            'icon' => 'eicon-text-align-center',
                        ],
                        'right' => [
                            'title' => esc_html__( 'Right', 'plugin-name' ),
                            'icon' => 'eicon-text-align-right',
                        ],
                    ],
                    'default' => 'center',
                ]
            );

            $this->add_control(
                'font_size',
                [
                    'type' => \Elementor\Controls_Manager::SLIDER,
                    'label' => esc_html__( 'Size', 'plugin-name' ),
                    'size_units' => [ 'px', 'em', 'rem' ],
                    'range' => [
                        'px' => [
                            'min' => 1,
                            'max' => 200,
                        ],
                    ],
                    'default' => [
                        'unit' => 'px',
                        'size' => 20,
                    ],
                ]
            );
    

            $this->add_control(
                'image',
                [
                    'type' => \Elementor\Controls_Manager::MEDIA,
                    'label' => esc_html__( 'Choose Image', 'plugin-name' ),
                    'default' => [
                        'url' => \Elementor\Utils::get_placeholder_image_src(),
                    ]
                ]
            );


            $this->add_responsive_control(
                'space_between',
                [
                    'type' => \Elementor\Controls_Manager::SLIDER,
                    'label' => esc_html__( 'Spacing', 'plugin-name' ),
                    'range' => [
                        'px' => [
                            'min' => 0,
                            'max' => 100,
                        ],
                    ],
                    'devices' => [ 'desktop', 'tablet', 'mobile' ],
                    'desktop_default' => [
                        'size' => 30,
                        'unit' => 'px',
                    ],
                    'tablet_default' => [
                        'size' => 20,
                        'unit' => 'px',
                    ],
                    'mobile_default' => [
                        'size' => 10,
                        'unit' => 'px',
                    ],
                    'selectors' => [
                        '{{WRAPPER}} .widget-image' => 'margin-bottom: {{SIZE}}{{UNIT}};',
                    ],
                ]
            );

            $this->add_responsive_control(
                'title_padding',
                [
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'label' => esc_html__( 'Padding', 'plugin-name' ),
                    'size_units' => [ 'px', 'em', '%' ],
                    'selectors' => [
                        '{{WRAPPER}} .widget-title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                ]
            );

            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name' => 'title_typography',
                    'selector' => '.typo',
                ]
            );

            $this->add_group_control(
                \Elementor\Group_Control_Border::get_type(),
                [
                    'name' => 'border',
                    'selector' => '.border-wrapper',
                ]
            );

            // reapter
            $repeater = new \Elementor\Repeater();
            $repeater2 = new \Elementor\Repeater();
            $repeater->add_control(
                'add_card_title',
                [
                    'label'=>__('Add price','plugin-name'),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'text',
                    'placeholder'=> __('https://your-link.com','plugin-name'),
                ]
            );

            $repeater2->add_control(
                'pricing_info',
                [
                    'label'=>__('Pricing info list','plugin-name'),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'url',
                    'placeholder'=> __('https://your-link.com','plugin-name'),
                ]
            );


            $this->add_control(
                'card_list',
                [
                    'label' => esc_html__( 'Pricing card', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::REPEATER,
                    'fields' => $repeater->get_controls(),
                    'default' => [
                        [
                            'add_card_title' => esc_html__( '99', 'plugin-name' ),
                        ],
                        [
                            'add_card_title' => esc_html__( '70', 'plugin-name' ),
                        ],
                    ],
                    'title_field' => '{{{ add_card_title }}}',
                ]
            );

            $this->add_control(
                'pricing_info_list',
                [
                    'label' => esc_html__( 'Repeater List for pricing info', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::REPEATER,
                    'fields' => $repeater2->get_controls(),
                    'default' => [
                        [
                            'pricing_info' => esc_html__( 'Body building', 'plugin-name' ),
                        ],
                        [
                            'pricing_info' => esc_html__( 'Running', 'plugin-name' ),
                        ],
                    ],
                    'title_field' => '{{{ pricing_info }}}',
                ]
            );
    
            $this->end_controls_section();

            $this->start_controls_section(
                'info_section',
                [
                    'label' => esc_html__( 'Info sectionnnnnnnnnnnnnnn ', 'plugin-name' ),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );
            $this->start_controls_tabs(
                'style_tabs',
                [
                    'label' => esc_html__( 'Normal', 'plugin-name' ),
                ]
            );
            
            $this->start_controls_tab(
                'style_normal_tab',
                [
                    'label' => esc_html__( 'Normal', 'plugin-name' )
                ]
            );

            $this->add_control(
                'OKOKOKOKOK',
                [
                    'label'=>__('Normal text','plugin-name'),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'url',
                    'placeholder'=> __('https://your-link.com','plugin-name'),
                ]
            );
            
            $this->end_controls_tab();


            $this->start_controls_tab(
                'style_hover_tab',
                [
                    'label' => esc_html__( 'Abnormal tab', 'plugin-name' ),
                ]
            );


            $this->add_control(
                'dependent-control-name',
                [
                    'label' => esc_html__( 'Conditional label add', 'plugin-name' ),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'url',
                    'placeholder'=> __('https://your-link.com','plugin-name'),

                ]
            );

            $this->add_control(
                'neww_text_label',
                [
                    'label' => esc_html__( 'appearing this new label', 'plugin-name' ),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'url',
                    'placeholder'=> __('https://your-link.com','plugin-name'),

                    'condition' => [
                        'dependent-control-name' => 'exact-value',
                    ],
                ]
            );


            $this->add_control(
                'dependent-control-name2',
                [
                    'label' => esc_html__( 'Conditional label add check array(value-1,value-2)', 'plugin-name' ),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'url',
                    'placeholder'=> __('https://your-link.com','plugin-name'),

                ]
            );

            $this->add_control(
                'neww_text_label2',
                [
                    'label' => esc_html__( 'appearing this new label', 'plugin-name' ),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'url',
                    'placeholder'=> __('https://your-link.com','plugin-name'),

                    'condition' => [
                        'dependent-control-name2' => [ 'value-1', 'value-2' ],
                    ],
                ]
            );

            $this->add_control(
                'dependent-control-1-name',
                [
                    'label' => esc_html__( '(dependent-control-1-value)', 'plugin-name' ),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'gggg',
                    'placeholder'=> __('https://your-link.com','plugin-name'),

                ]
            );
            $this->add_control(
                'dependent-control-2-name',
                [
                    'label' => esc_html__( '(dependent-control-2-value)', 'plugin-name' ),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'gggg',
                    'placeholder'=> __('https://your-link.com','plugin-name'),

                ]
            );

            $this->add_control(
                'unique-control-name',
                [
                    'label' => esc_html__( 'Condition label multiple', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::TEXT,
                    'condition' => [
                        'dependent-control-1-name' => 'dependent-control-1-value',
                        'dependent-control-2-name' => 'dependent-control-2-value',
                    ],
                ]
            );

            $this->add_control(
                'okokokok2',
                [
                    'label'=>__('AbNormal text','plugin-name'),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'url',
                    'placeholder'=> __('https://your-link.com','plugin-name'),
                ]
            );

            $this->add_control(
                'popover-toggle',
                [
                    'label' => esc_html__( 'popover-toggle', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
                    'label_off' => esc_html__( 'Default', 'plugin-name' ),
                    'label_on' => esc_html__( 'Custom', 'plugin-name' ),
                    'return_value' => 'yes',
                ]
            );
    
            $this->start_popover();
                $this->add_control(
                    'popover_control_one',
                    [
                        'label' => esc_html__( 'Control Label', 'plugin-name' ),
		                'description' => esc_html__( 'Short control description.', 'plugin-name' ),
                        'type'=>\Elementor\Controls_Manager::TEXT,
                        'input_type'=>'url',
                        'placeholder'=> __('https://your-link.com','plugin-name'),
                    ]
                );
                $this->add_control(
                    'popover_control_two',
                    [
                        'label'=>__('popover_control_two','plugin-name'),
                        'type'=>\Elementor\Controls_Manager::TEXT,
                        'input_type'=>'url',
                        'placeholder'=> __('https://your-link.com','plugin-name'),
                    ]
                );
           
    
            $this->end_popover();

            $this->end_controls_tabs();
    
            
            $this->end_controls_tabs();
                
            $this->end_controls_section();


            $this->start_controls_section(
                'bordersection',
                [
                    'label' => __('border section','plugin-name'),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );

            $this->add_control(
                'border',
                [
                    'label' => esc_html__( 'Border', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::SWITCHER,
                ]
            );
            $this->add_control(
                'border_style',
                [
                    'label' => esc_html__( 'Border Style', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::SELECT,
                    'options' => [
                        '' => esc_html__( 'None', 'plugin-name' ),
                        'solid' => esc_html__( 'Solid', 'plugin-name' ),
                        'double' => esc_html__( 'Double', 'plugin-name' ),
                        'dotted' => esc_html__( 'Dotted', 'plugin-name' ),
                        'dashed' => esc_html__( 'Dashed', 'plugin-name' ),
                        'groove' => esc_html__( 'Groove', 'plugin-name' ),
                    ],
                    'selectors' => [
                        '.inner_class' => 'border-style: {{VALUE}}',
                    ],
                    // 'condition' => [
                    //     'border' => 'yes',
                    // ],
            
                ]
            );
            $this->add_control(
                'border_color',
                [
                    'label' => esc_html__( 'Border Color', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'default' => '',
                    'selectors' => [
                        '.inner_class' => 'border-color: {{VALUE}}',
                    ],
                    // 'condition' => [
                    //     'border' => 'yes',
                    // ],
                ]
            );
            $this->add_responsive_control(
                'border_width',
                [
                    'label' => esc_html__( 'Border Width', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::DIMENSIONS,
                    'selectors' => [
                        '{{WRAPPER}} .inner_class' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                    'condition' => [
                        'border' => 'yes',
                    ],
                ]
            );

            $this->end_controls_section();

            $this->start_controls_section(
                'global',
                [
                    'label' => __('global','plugin-name'),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );
            $this->add_control(
                'heading_color',
                [
                    'label' => esc_html__( 'Heading Color', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '.heading-class' => 'color: {{VALUE}};',
                    ],
                    'global' => [
                        'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_PRIMARY,
                    ],
                ]
            );
            $this->add_control(
                'sub_heading_color',
                [
                    'label' => esc_html__( 'Sub Heading Color', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .sub-heading-class' => 'color: {{VALUE}};',
                    ],
                    'global' => [
                        'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_SECONDARY,
                    ],
                ]
            );

            $this->add_control(
                'content_color',
                [
                    'label' => esc_html__( 'Content Color', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::COLOR,
                    'selectors' => [
                        '{{WRAPPER}} .content-class' => 'color: {{VALUE}};',
                    ],
                    'global' => [
                        'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_TEXT,
                    ],
                ]
            );
            $this->add_group_control(
                \Elementor\Group_Control_Typography::get_type(),
                [
                    'name' => 'heading_typography',
                    'selector' => '{{WRAPPER}} .heading-class',
                    'global' => [
                        'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Typography::TYPOGRAPHY_PRIMARY,
                    ],
                ]
            );

            $this->add_control(
                'heading',
                [
                    'label' => esc_html__( 'Heading', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::TEXT,
                    'placeholder' => esc_html__( 'Enter your heading', 'plugin-name' ),
                    'label_block' => true,
                    'dynamic' => [
                        'active' => true,
                    ],
                ]
            );
            
            $this->add_control(
                'content',
                [
                    'label' => esc_html__( 'Content', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::TEXTAREA,
                    'placeholder' => esc_html__( 'Enter your content', 'plugin-name' ),
                    'dynamic' => [
                        'active' => true,
                    ],
                ]
            );
            
            $this->add_control(
                'count',
                [
                    'label' => esc_html__( 'Count', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::NUMBER,
                    'default' => 0,
                    'min' => 0,
                    'max' => 100,
                    'step' => 1,
                    'dynamic' => [
                        'active' => true,
                    ],
                ]
            );

            $this->add_control(
                'unique-control-name',
                [
                    'label' => esc_html__( 'we we we we we', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::NUMBER,
                    'default' => 100,
                    'frontend_available' => true,
                ]
            );



            $this->add_control(
                'some_number',
                [
                    'label' => esc_html__( 'Some Number', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::NUMBER,
                    'default' => 100,
                    'frontend_available' => true,
                ]
            );
            
            $this->end_controls_section();

            $this->start_controls_section(
                'custom_control',
                [
                    'label' => __('custom controls','plugin-name'),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );
            $this->add_control(
                'price_currency',
                [
                    'label' => esc_html__( 'Currency', 'elementor-currency-control' ),
                    'type' => 'currency',
                ]
            );
            $this->add_control(
                'continents-control',
                [
                    'label' => esc_html__( 'continents-control ', 'elementor-currency-control' ),
                    'type' => 'continents-control',
                ]
            );

            $this->end_controls_section();
            $this->start_controls_section(
                'animation control',
                [
                    'label' => __('animation control','plugin-name'),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );
            $this->add_control(
                'entrance_animation',
                [
                    'label' => esc_html__( 'Entrance Animation', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::ANIMATION,
                    'prefix_class' => 'animated ',
                ]
            );
            $this->end_controls_section();


            
            $this->start_controls_section(
                'data table',
                [
                    'label' => __('data_tableeeeeee','plugin-name'),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );

            // $repeater3= new \Elementor\Repeater();

            // $repeater3->add_control(
            //     'eael_data_table_header_col',
            //     [
            //         'label' => esc_html__('Column Name', 'essential-addons-for-elementor-lite'),
            //         'default' => esc_html__('Table Header', 'essential-addons-for-elementor-lite'),
            //         'type' => Controls_Manager::TEXT,
            //         'dynamic'   => ['active' => true],
            //         'label_block' => false,
            //     ]
            // );

            $repeater->add_control(
                'eael_data_table_header_col',
                [
                    'label' => esc_html__('Column Name', 'essential-addons-for-elementor-lite'),
                    'default' => esc_html__('Table Header', 'essential-addons-for-elementor-lite'),
                    'type'=>\Elementor\Controls_Manager::TEXT,
                    'input_type'=>'url',
                    'dynamic'   => ['active' => true],
                ]
            );
             $repeater->add_control(
            'eael_data_table_header_col_span',
            [
                'label' => esc_html__('Column Span', 'essential-addons-for-elementor-lite'),
                'default' => '',
                'type' => \Elementor\Controls_Manager::TEXT,
                'dynamic'   => ['active' => true],
                'label_block' => false,
            ]
        );

        $repeater->add_control(
            'eael_data_table_header_col_icon_enabled',
            [
                'label' => esc_html__('Enable Header Icon', 'essential-addons-for-elementor-lite'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('yes', 'essential-addons-for-elementor-lite'),
                'label_off' => __('no', 'essential-addons-for-elementor-lite'),
                'default' => 'false',
                'return_value' => 'true',
            ]
        );

        $repeater->add_control(
            'eael_data_table_header_icon_type',
            [
                'label'    => esc_html__('Header Icon Type', 'essential-addons-for-elementor-lite'),
                'type'    => \Elementor\Controls_Manager::CHOOSE,
                'options'               => [
                    'none'        => [
                        'title'   => esc_html__('None', 'essential-addons-for-elementor-lite'),
                        'icon'    => 'fa fa-ban',
                    ],
                    'icon'        => [
                        'title'   => esc_html__('Icon', 'essential-addons-for-elementor-lite'),
                        'icon'    => 'fa fa-star',
                    ],
                    'image'       => [
                        'title'   => esc_html__('Image', 'essential-addons-for-elementor-lite'),
                        'icon'    => 'eicon-image-bold',
                    ],
                ],
                'default'               => 'icon',
                'condition' => [
                    'eael_data_table_header_col_icon_enabled' => 'true'
                ]
            ]
        );

        // Comment on this control
        $repeater->add_control(
            'eael_data_table_header_col_icon_new',
            [
                'label' => esc_html__('Icon', 'essential-addons-for-elementor-lite'),
                'type' => \Elementor\Controls_Manager::ICONS,
                'fa4compatibility' => 'eael_data_table_header_col_icon',
                'default' => [
                    'value' => 'fas fa-star',
                    'library' => 'solid',
                ],
				'condition' => [
					'eael_data_table_header_col_icon_enabled' => 'true',
					'eael_data_table_header_icon_type'	=> 'icon'
				]
			]
		);

		$repeater->add_control(
			'eael_data_table_header_col_img',
			[
				'label' => esc_html__( 'Image', 'essential-addons-for-elementor-lite'),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					// 'url' => Utils::get_placeholder_image_src(),
				],
				'condition' => [
					'eael_data_table_header_icon_type'	=> 'image'
				]
			]
		);

		$repeater->add_control(
			'eael_data_table_header_col_img_size',
			[
				'label' => esc_html__( 'Image Size(px)', 'essential-addons-for-elementor-lite'),
				'default' => '25',
				'type' => \Elementor\Controls_Manager::NUMBER,
				'label_block' => false,
				'condition' => [
					'eael_data_table_header_icon_type'	=> 'image'
				]
			]
		);

		$repeater->add_control(
			'eael_data_table_header_css_class',
			[
				'label'			=> esc_html__( 'CSS Class', 'essential-addons-for-elementor-lite'),
				'type'			=> \Elementor\Controls_Manager::TEXT,
                'dynamic'     => [ 'active' => true ],
				'label_block' 	=> false,
			]
		);

		$repeater->add_control(
			'eael_data_table_header_css_id',
			[
				'label'			=> esc_html__( 'CSS ID', 'essential-addons-for-elementor-lite'),
				'type'			=> \Elementor\Controls_Manager::TEXT,
                'dynamic'     => [ 'active' => true ],
				'label_block'	=> false,
			]
		);

  		$this->add_control(
			'eael_data_table_header_cols_data',
			[
				'type' => \Elementor\Controls_Manager::REPEATER,
				'seperator' => 'before',
				'default' => [
					[ 'eael_data_table_header_col' => 'Table Header' ],
					[ 'eael_data_table_header_col' => 'Table Header' ],
					[ 'eael_data_table_header_col' => 'Table Header' ],
					[ 'eael_data_table_header_col' => 'Table Header' ],
				],
				'fields'      =>  $repeater->get_controls() ,
				'title_field' => '{{eael_data_table_header_col}}',
			]
		);


            $this->end_controls_section();
        }

        protected function render(){
            $settings= $this ->get_settings_for_display();

            ?>
            <h2><?php echo $settings['url'] ?></h2>

            <ul>
                <li style="color:<?php echo $settings['text_color'] ?>">
                    Text color
                  <?php echo $settings['text_color'] ?>
                </li>
                <li style="font-size:<?php echo ((  $settings['size'] ))?>px!important"> 
                    Font size control 
                  <?php echo $settings['size'] ?>
                </li>
                <li>
                    <?php
                        $t = date("H");

                        if ($settings['open_lightbox']=='yes') {
                            echo "ohh this is opened";
                        }
                        else {
                            echo "opps this is closed!";
                        }
                    ?>
                    <?php echo $settings['open_lightbox'] ?>
                </li>
                <li style="text-align:<?php echo $settings['alignment'] ?>">
                    Test alignment
                </li>
                <li>
                </li>
                <!-- <li>
     

                   ?>
                   pppp
                </li> -->
                <li>
                   <?php 
                        foreach ($settings['image'] as $value) {
                        ?>
                        <img src="<?php echo $value ?>"  alt="">
                        <?php
                       echo $value, "\n";
                    }
                   ?>
                </li>
                <li>
                    Space between
                     <?php print_r ($settings['space_between']['size']) ?>
                     <div>
                        <p style="margin-bottom:<?php print_r ($settings['space_between']['size']) ?><?php print_r ($settings['space_between']['unit'])?>">
                            ok
                        </p>
                        <p>
                            ok 2
                         </p>
                     </div>
                </li>
                <li>
                    <!-- testsize -->
                  <h1 class="typo">TEST Group control</h1>
                </li>
                <li>
                    <!-- testsize -->
                  <h1 class="border-wrapper">TEST border wrapper group control</h1>
                </li>
                <li>
                    Padding test
                    <p style="padding:<?php print_r ($settings['title_padding']['top']) ?><?php print_r ($settings['title_padding']['unit']) ?>">Padding testtttt</p>
                </li>
                <li>
                    <h3 class="heading-class">Global</h3>
                </li>
                <li>
                  <div class="<?php echo esc_attr( $settings['entrance_animation'] ); ?>">
                    ...
                  </div>
                  Animation
                </li>
            </ul>

            <?php
                if ( $settings['card_list'] ) {
                    foreach (  $settings['card_list'] as $item ) {
                        echo '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div class="_pricing_fithub_card">
                                    <div class="_pricing_fithub_card_pr">
                                        <h5 class="_pricing_fithub_card_pr_t">Standard</h5>
                                        <div class="_pricing_fithub_card_pr_box">
                                            <h2 class="_pricing_fithub_card_pr_t1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" viewBox="0 0 42 42">
                                                    <path fill="#161C28" d="M27.998 14.875h3.5c0-4.965-4.821-7.23-8.75-7.75V3.5h-3.5v3.624c-3.929.522-8.75 2.786-8.75 7.751 0 4.735 4.666 7.198 8.75 7.753v8.697c-2.534-.44-5.25-1.792-5.25-4.2h-3.5c0 4.53 4.244 7.208 8.75 7.763V38.5h3.5v-3.623c3.929-.521 8.75-2.787 8.75-7.752s-4.821-7.23-8.75-7.75v-8.7c2.328.418 5.25 1.647 5.25 4.2zm-14 0c0-2.553 2.923-3.782 5.25-4.2v8.398c-2.399-.442-5.25-1.753-5.25-4.198zm14 12.25c0 2.553-2.922 3.782-5.25 4.2v-8.4c2.328.418 5.25 1.647 5.25 4.2z"/>
                                                </svg>'
                                                ?>
                                               <?php echo $item['add_card_title'] ?>
                                                
                                                <span class="_pricing_fithub_card_pr_t1_sp">/month</span>
                                            </h2>
                                        </div>
                                    </div>

                                 <div class="_pricing_fithub_card_feature">
                                    <ul class="_pricing_fithub_card_feature_ul">
                                        <?php
                                            foreach (  $settings['pricing_info_list'] as $item2 ) {
                                        ?>
                                          <li class="_pricing_fithub_card_feature_li"><?php echo $item2['pricing_info'] ?></li>	
                                        <?php
                                            }
                                        ?>
                                    </ul>
                                </div>
                                <div class="_pricing_fithub_card_link">
                                    <a href="#0" class="_pricing_fithub_card_link1">View More</a>
                                </div>
                            </div>
                        </div>
             
                  <?php

                }
            }


        


        //render using js
        // protected function _content_template(){
        /*    ?>
        //     <h3>{{{ setting.url }}}</h3>
        //     <?php
        // } */


        //important table data rendering
        // $settings = $this->get_settings_for_display();
        // $table_tr = [];
		// $table_td = [];
	  	// // Storing Data table content values
	  	// foreach( $settings['eael_data_table_content_rows'] as $content_row ) {
	  	// 	$row_id = uniqid();
	  	// 	if( $content_row['eael_data_table_content_row_type'] == 'row' ) {
	  	// 		$table_tr[] = [
	  	// 			'id' => $row_id,
	  	// 			'type' => $content_row['eael_data_table_content_row_type'],
	  	// 		];
	  	// 	}
        
        }
    }