<?php

    class Post_Widget extends \Elementor\Widget_Base{
        public function get_name(){
            return 'postwd';
        }
        public function get_title() {
            return 'post widgets';
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

        public function get_post_types () {
            $post_types = ha_get_post_types( [],[ 'elementor_library', 'attachment' ] );
            // $post_types = [];
            return $post_types;
        }

        protected function _register_controls(){
        
    
            $this->start_controls_section(
                '_section_post_list',
                [
                    'label' => __( 'List', 'happy-elementor-addons' ),
                    'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                ]
            );
    
            $this->add_control(
                'post_type',
                [
                    'label' => __( 'Source', 'happy-elementor-addons' ),
                    'type' => \Elementor\Controls_Manager::SELECT,
                    'options' => $this->get_post_types(),
                    'default' => key( $this->get_post_types() ),
                ]
            );
    
            $this->add_control(
                'show_post_by',
                [
                    'label' => __( 'Show post by:', 'happy-elementor-addons' ),
                    'type' => \Elementor\Controls_Manager::SELECT,
                    'default' => 'recent',
                    'options' => [
                        'recent' => __( 'Recent Post', 'happy-elementor-addons' ),
                        'selected' => __( 'Selected Post', 'happy-elementor-addons' ),
                    ],
    
                ]
            );
    
            $this->add_control(
                'posts_per_page',
                [
                    'label' => __( 'Item Limit', 'happy-elementor-addons' ),
                    'type' => \Elementor\Controls_Manager::NUMBER,
                    'default' => 3,
                    'dynamic' => [ 'active' => true ],
                    'condition' => [
                        'show_post_by' => [ 'recent' ]
                    ]
                ]
            );
    
            $repeater = [];
    
            foreach ( $this->get_post_types() as $key => $value ) {
    
                $repeater[$key] = new \Elementor\Repeater();
    
                $repeater[$key]->add_control(
                    'title',
                    [
                        'label' => __( 'Title', 'happy-elementor-addons' ),
                        'type' => \Elementor\Controls_Manager::TEXT,
                        'label_block' => true,
                        'placeholder' => __( 'Customize Title', 'happy-elementor-addons' ),
                        'dynamic' => [
                            'active' => true,
                        ],
                    ]
                );
    
                // $repeater[$key]->add_control(
                //     'post_id',
                //     [
                //         'label' => __( 'Select ', 'happy-elementor-addons' ) . $value,
                //         'label_block' => true,
                //         'type' => Select2::TYPE,
                //         'multiple' => false,
                //         'placeholder' => 'Search ' . $value,
                //         'dynamic_params' => [
                //             'object_type' => 'post',
                //             'post_type'   => $key,
                //         ],
                //     ]
                // );
    
                $this->add_control(
                    'selected_list_' . $key,
                    [
                        'label' => '',
                        'type' => \Elementor\Controls_Manager::REPEATER,
                        'fields' => $repeater[$key]->get_controls(),
                        'title_field' => '{{ title }}',
                        'condition' => [
                            'show_post_by' => 'selected',
                            'post_type' => $key
                        ],
                    ]
                );
            }
    
            $this->end_controls_section();
        }




        protected function render () {
            ?>
            <h2>Testttt render</h2>

            <?php
                $settings = $this->get_settings_for_display();

                if ( ! $settings['post_type'] ){
                    return;
                }

                $args = [
                    'post_status'      => 'publish',
                    'post_type'        => $settings['post_type'],
                    'suppress_filters' => false,
                ];

                if ( 'selected' === $settings['show_post_by'] ) {
                    $lists = $settings['selected_list_' . $settings['post_type']];

                    if ( ! empty( $lists ) ) {
                        foreach ( $lists as $index => $value ) {
                            ?>
                            <h2><?php echo $value ?></h2>

                            <?php
                        }
                    }
                    else{
                        foreach ( $lists as $list ){
                            ?>
                        <h2><?php echo $list ?></h2>
            
                        <?php
                        }
                        ?>
                        <h2>Elseeeee</h2>
            
                        <?php
                    }
                    $args['post__in'] = (array) $ids;
			        $args['orderby'] = 'post__in';
                }

                if ( 'selected' === $settings['show_post_by'] && empty( $ids ) ) {
                    $posts = [];
                } else {
                    ?>
                    <h1>show_post_by</h1>
                    <?php

                    $posts = get_posts( $args );
                    foreach ( $posts as $post ){

                        $title = $post->post_title;
                        ?>
                        <h2><?php echo $title ?></h2>
            
                        <?php
                    }
                }
        
	   }
}