#include <Adafruit_NeoPixel.h>
#define LED_PIN  3 
#define NUM_LEDS 4 
Adafruit_NeoPixel strip(NUM_LEDS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
strip.begin();
strip.show();
}

void loop() {  ///on.off on off led
strip.fill(strip.Color(255, 255, 255));
strip.show();
delay(350);
strip.clear();
strip.show();
delay(350);
}
