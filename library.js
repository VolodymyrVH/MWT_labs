class ColorChanger
{
    constructor(elementId, color)
    {
        this.elementId = document.getElementById(elementId);
        this.color = color;
    }

    changeColor()
    {
        this.elementId.style.color = this.color;
    }
}

export default ColorChanger;