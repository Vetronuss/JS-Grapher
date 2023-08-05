function insertAtCursor(myField, myValue) {
	//IE support
	if (document.selection) {
		myField.focus();
		sel2 = document.selection.createRange();
		sel2.text = myValue;
	}
	//MOZILLA and others
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		myField.value = myField.value.substring(0, startPos)
			+ myValue
			+ myField.value.substring(endPos, myField.value.length);
	} else {
		myField.value += myValue;
	}
}

function insertT(fel, val) {
	var a = fel.value;

	var b = val;
	var position = fel.selectionStart;
	var output = [a.slice(0, position), b, a.slice(position)].join('');
	fel.value = output;
	fel.setSelectionRange(position + val.length, position + val.length);
}


class CBOX
{

	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.fillColor = color(255)
		this.borderColor = color(0);
		this.width = 20;
		this.height = 20;
		this.val = false;
		this.hover = false;
	}

	update()
	{
		//hover handling
		if (!this.hover && collidePointRect(mouseX,mouseY,this.x,this.y,this.width,this.height))
		{
			this.hover = true;
		}else
		{
			this.hover = false;
		}
		//mouse press handling
		if (this.hover && mouseIsPressed && mouseButton == LEFT)
		{
			this.value() = true;
			this.hover = false;
		}
		
		
		//drawing
		push();
		fill(this.fillColor);
		stroke(this.borderColor);
		rect(this.x,this.y,this.width,this.height);
		pop();
	}

	
};