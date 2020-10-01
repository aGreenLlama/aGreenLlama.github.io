
var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x2c3e50
});
document.body.appendChild(app.view);

app.loader.add('bunny', 'https://pixijs.io/examples/examples/assets/bunny.png')
    .load(startup);

function startup()
{
    var bunny = new PIXI.mesh.Mesh(app.loader.resources.bunny.texture);

    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    bunny.tint = 0;

    const text = new PIXI.Text(app.renderer.type)

    app.stage.addChild(bunny);
    app.stage.addChild(text);


    app.ticker.add(function(delta)
    {
        bunny.rotation += 0.1 * delta;
    });
}
