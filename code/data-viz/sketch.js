let trackNum;
let trackTime;
let albumColors = [];
let albumNames = ['comedown_machine','Brief_Inquiry_Into_Online_Relationships', '1989', 'after_hours'];
let songLength;
let albumData;
let trackData;
let backgroundColor;

let maxDuration;
let albumTitle;
let songDuration;
let albumNum;


function preload() {
    //albumNames.forEach((name, index) => {
        let albumTitle ='after_hours';
        let trackTitle ='after_hours_track';
        albumData = loadJSON(`data/${albumTitle}.json`);
        trackData = loadJSON(`data/${trackTitle}.json`)
  //  });
}

function setup() {
    //albumNames.forEach((_, index) => {
        createCanvas(600,600);
        // let albumContainerID = `canvas-${index}-container`;
        //cnv.parent(albumContainerID);
    //}
    songLength = albumData.tracks.items.map(track => track.duration_ms);
    //songDuration = albumData.tracks.items.duration_ms;
    maxDuration = max(songLength);
    angleMode(DEGREES);
    colorMode(HSB, 360,100,100);
}

function draw() {
    //backgroundBrightness();
    //backgroundHue();
    background(400,80,90);
    noLoop();
    drawTrackNum(albumData.total_tracks);
    console.log(albumData.total_tracks)
    //displayTitle();
    drawCircle();

} 

/* function backgroundBrightness() {
    let energy = trackData.energy;
    brightness = map(energy,0,1,0,100);
}

function backgroundHue() {
    let valence = trackData.valence;
    hue = map(valence,0,1,30,100);
} */

function drawCircle() { // popularity
    let popularity = albumData.popularity;
    console.log(popularity);
    let angle = map(popularity, 0,100,0,360);
    console.log(angle);
    let circleColor;


    push();
        if (popularity > 0 && popularity < 30) {
            circleColor = 'E8DB7D'
        } else if (popularity > 30 && popularity < 60) {
            circleColor = 'AEF3E7'
        } else if (popularity > 60 && popularity < 80) {
            circleColor = '23CE6B'
        } else if (popularity > 80 && popularity < 90) {
            circleColor = '7189FF'
        } else {
            circleColor = 'FF47DA'
        }
        stroke('#' + circleColor);
        strokeWeight(10);
        noFill();
        translate(width/2, height/2);
        rotate(-90);
        arc(0,0,width-10, width-10,0, angle );
        
    pop();
}



function drawTrackNum(totalTrackNum) {
    //totalTrackNum = albumData.total_tracks;

    
    
    for (i = 0; i< albumData.total_tracks; i++) {
        let valence = trackData.valence;
        console.log(valence);
        let hueValue;
            if (valence > 0.5) {
                if (random(1) < 0.5) {
                    hueValue = random(0, 60); // Choose a random number between 0 and 60
                } else {
                    huevalue = random(270, 360); // Choose a random number between 270 and 360
                }   
            } else {
                hueValue = random(60,270);
            }
        let trackDurationMs = songLength[i];
        let trackDurationSec = trackDurationMs/ 1000;
        let barWidthPerSec = width/maxDuration * 1000;
        let barWidth = map(songDuration,0,maxDuration,0,width);
        push();
            noStroke();
            fill(random(hueValue),random(100),random(100));
            rect(0,i * height/totalTrackNum, barWidth, height/totalTrackNum);

                for (let j = 0; j < trackDurationSec; j++) {
                    let barColor = color(random(360), 80, 90);
                    fill(barColor);
                    let segmentWidth = map(trackDurationMs, 0, maxDuration, 0, width) / trackDurationSec;
                    rect(j * segmentWidth, i * height / totalTrackNum, segmentWidth, height / totalTrackNum);
                }
        pop();
    }
    /* function drawSeconds() {
        for (i = 0; i< albumData.total_tracks; i++) {
            let songDuration = songLength[i]
            let barWidth = map(songDuration,0,,0,width);
            songBar.mouseOver(trackTitle)


            

    } */
}



/* function expandTrack() {
    trackTitles = albumData.items.names
    text('trackTitle',0,i * height/totalTrackNum,)
    
}
*/


function displayTitle() {
    albumTitle = albumData.name
    console.log(albumTitle);
    push();
        fill('blue');
        noStroke();
        textStyle(BOLD);
        textSize(60);
        rotate(90);
        text(albumTitle,10,-height + 60);
    pop();
} 

