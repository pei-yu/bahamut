﻿#pragma strict
var scaleX : float;
var nowHP : float;
var maxHP : float;

function Start () {
	nowHP =GetComponentInParent(Monster).hp;
	maxHP = nowHP;
	scaleX=transform.localScale.x;
}

function Update () {
	nowHP = GetComponentInParent(Monster).hp;
	var rate :float =nowHP/maxHP;
	if(rate<0.3){
		GetComponent(SpriteRenderer).color = Color.red;
	}
	else if(rate<0.5){
		GetComponent(SpriteRenderer).color = Color.yellow;
	}
	else{
		GetComponent(SpriteRenderer).color = Color.green;
	}
	transform.localScale.x =scaleX * rate;
}
