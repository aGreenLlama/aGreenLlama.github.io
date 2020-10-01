
var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x2c3e50,
    //forceCanvas:true
});
document.body.appendChild(app.view);

app.loader.add('bunny', 'https://pixijs.io/examples/examples/assets/bunny.png')
    .load(startup);

function startup()
{
    const container = new PIXI.Container();
    var bunny = new PIXI.Sprite(app.loader.resources.bunny.texture);
    container.addChild (bunny);
    var g = new PIXI.Graphics ()
        .drawRect (1800,980,1000,100);

    container.mask = g;
    container.addChild (g);

    bunny.scale.set (10, 10);
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;


    app.stage.addChild(container);

    app.ticker.add(function(delta)
    {
        //g.rotation += 0.1 * delta;
    });
}
