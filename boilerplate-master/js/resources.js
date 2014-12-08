game.resources = [

    /* Graphics.
     * @example
     * {name: "example", type:"image", src: "data/img/example.png"},
     */
    //our level tileset
    {name: "area01_level_tiles", type:"image", src:"data/img/map/area01_level_tiles.png"},
    {name: "asterion_level_tiles", type: "image", src:"data/img/map/asterion_level_tiles.png"},
    // The main player spritesheet
    {name: "gripe_run_right", type:"image", src: "data/img/sprite/gripe_run_right.png"},
    
    // the background
    // !NOTE! need to change for our game
    {name: "background", type: "image", src: "data/img/background.png"},
    // the spinning coin spritesheet
    // !NOTE! not needed for now
    {name: "spinning_coin_gold", type: "image", src: "data/img/sprite/spinning_coin_gold.png"},
    // our enemy entity
    // !NOTE! need to add several sprites, for different enemies
    {name: "slave_01", type: "image", src: "data/img/sprite/slave_01.png"},
    {name: "slave_02", type: "image", src: "data/img/sprite/slave_02.png"},
    {name: "thesee", type: "image", src: "data/img/sprite/thesee.png"},

    /* Texture Atlases
     * @example
     * {name: "texture", type: "json", src: "data/img/example_tps.json"},
     */

    /* Maps.
     * @example
     * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
     * {name: "example01", type: "tmx", src: "data/map/example01.json"},
      */
    {name: "area01",type: "tmx", src: "data/map/area01.tmx"},

    /* Background music.
     * @example
     * {name: "example_bgm", type: "audio", src: "data/bgm/"},
     */
    {name: "labytemple", type: "audio", src: "data/bgm/"},

    /* Sound effects.
     * @example
     * {name: "example_sfx", type: "audio", src: "data/sfx/"}
     */
    {name: "cri_Femme", type: "audio", src: "data/sfx/"},
    {name: "cri_Femme2", type: "audio", src: "data/sfx/"},
    {name: "cri_Homme", type: "audio", src: "data/sfx/"},
    {name: "cri_Homme2", type: "audio", src: "data/sfx/"},
    {name: "cri_Homme3", type: "audio", src: "data/sfx/"},
    
];
