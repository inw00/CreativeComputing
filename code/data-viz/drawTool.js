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
        let danceability = trackData.danceability;

        let trackDurationMs = songLength[i];
        let trackDurationSec = trackDurationMs/ 1000;
        let barWidthPerSec = width/maxDuration * 1000;
        let barWidth = map(trackDurationMs,0,maxDuration,0,width);
        push();
            noStroke();
                rect(0,i * height/totalTrackNum, barWidth, height/totalTrackNum);

                for (let j = 0; j < trackDurationSec; j++) {
                    let hueValue;
                    let satValue;
                    let brightValue;
                        // valence - hue converter 
                        if (valence > 0.5) {
                            if (random(1) < 0.5) {
                                hueValue = random(0, 60); // Choose a random number between 0 and 60
                            } else {
                                huevalue = random(270, 360); // Choose a random number between 270 and 360
                            }   
                            } else {
                            hueValue = random(60,270);
                        }

                        // danceability - brightness converter 
                        if (danceability > 0.5) {
                            brightValue = random(30,60);
                        } else {
                            brightValue = random(60,90);
                        }
                    
                    let barColor = color(hueValue, brightValue, random(20,100));
                    fill(barColor);
                    let segmentWidth = map(trackDurationMs, 0, maxDuration, 0, width) / trackDurationSec;
                    rect(j * segmentWidth, i * height / totalTrackNum, segmentWidth, height / totalTrackNum);
                }
        pop();
    }
}