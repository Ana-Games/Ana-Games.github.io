var points = 10;
var dmg_points = 5;
var atk_speed_points = 5;
var kb_points = 5;
var range_points = 5;
var mining_points = 5;
var jump_points = 5;
var health_points = 5;

function update_points(){
	document.getElementById("points").innerHTML = "Your Points: <b>" + points.toString()+"</b>";
}

function update_damage_points(x){
	if (points == 0 & x == 1){return;}
	if (dmg_points == 0 & x == -1){return;}
	if (dmg_points == 10 & x == 1){return;}
	points = points - x;
	dmg_points = dmg_points + x;
	update_points();
	document.getElementById("dmg_points").innerHTML = dmg_points.toString();
}

function update_attack_speed_points(x){
	if (points == 0 & x == 1){return;}
	if (atk_speed_points == 0 & x == -1){return;}
	if (atk_speed_points == 10 & x == 1){return;}
	points = points - x;
	atk_speed_points = atk_speed_points + x;
	update_points();
	document.getElementById("atk_speed_points").innerHTML = atk_speed_points.toString();
}

function update_knockback_points(x){
	if (points == 0 & x == 1){return;}
	if (kb_points == 0 & x == -1){return;}
	if (kb_points == 10 & x == 1){return;}
	points = points - x;
	kb_points = kb_points + x;
	update_points();
	document.getElementById("kb_points").innerHTML = kb_points.toString();
}

function update_range_points(x){
	if (points == 0 & x == 1){return;}
	if (range_points == 0 & x == -1){return;}
	if (range_points == 10 & x == 1){return;}
	points = points - x;
	range_points = range_points + x;
	update_points();
	document.getElementById("range_points").innerHTML = range_points.toString();
}

function update_mining_points(x){
	if (points == 0 & x == 1){return;}
	if (mining_points == 0 & x == -1){return;}
	if (mining_points == 10 & x == 1){return;}
	points = points - x;
	mining_points = mining_points + x;
	update_points();
	document.getElementById("mining_points").innerHTML = mining_points.toString();
}

function update_jump_points(x){
	if (points == 0 & x == 1){return;}
	if (jump_points == 0 & x == -1){return;}
	if (jump_points == 10 & x == 1){return;}
	points = points - x;
	jump_points = jump_points + x;
	update_points();
	document.getElementById("jump_points").innerHTML = jump_points.toString();
}

function update_health_points(x){
	if (points == 0 & x == 1){return;}
	if (health_points == 0 & x == -1){return;}
	if (health_points == 10 & x == 1){return;}
	points = points - x;
	health_points = health_points + x;
	update_points();
	document.getElementById("health_points").innerHTML = health_points.toString();
}

function submit_points(){
	document.getElementById("commands").style.display = "block";
	
	let name = document.getElementById("mcname").value;
	if (name == ""){name = "@p";}
	
	let true_dmg = dmg_points * 0.2;
	document.getElementById("dmg_code").innerHTML = "/attribute " + name + " minecraft:attack_damage base set " + true_dmg.toPrecision(2).toString();
	
	let true_atk_speed = atk_speed_points * 0.8;
	document.getElementById("atk_speed_code").innerHTML = "/attribute " + name + " minecraft:attack_speed base set " + true_atk_speed.toPrecision(2).toString();
	
	let true_kb = -2.0 + kb_points * 0.4;
	document.getElementById("kb_code").innerHTML = "/attribute " + name + " minecraft:attack_knockback base set " + true_kb.toPrecision(2).toString();

	let true_entity_range = range_points * 0.6;
	document.getElementById("e_range_code").innerHTML = "/attribute " + name + " minecraft:entity_interaction_range base set " + true_entity_range.toPrecision(2).toString();
	let true_block_range = range_points * 0.9;
	document.getElementById("b_range_code").innerHTML = "/attribute " + name + " minecraft:block_interaction_range base set " + true_block_range.toPrecision(2).toString();

	let true_mining = mining_points * 0.2;
	document.getElementById("mining_code").innerHTML = "/attribute " + name + " minecraft:block_break_speed base set " + true_mining.toPrecision(2).toString();

	let true_jump = 0.084 * jump_points;
	document.getElementById("jump_code").innerHTML = "/attribute " + name + " minecraft:jump_strength base set " + true_jump.toPrecision(2).toString();
	let true_fall = jump_points * 0.6;
	document.getElementById("fall_code").innerHTML = "/attribute " + name + " minecraft:safe_fall_distance base set " + true_fall.toPrecision(2).toString();

	let true_health = 4.0 * health_points;
	document.getElementById("health_code").innerHTML = "/attribute " + name + " minecraft:max_health base set " + true_health.toPrecision(2).toString();
}