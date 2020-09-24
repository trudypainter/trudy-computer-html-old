// The Simulated Bank Robbery - an example Curveship-js story, 2019-11-08
//  Copyright 2019 Nick Montfort
//
// Copying and distribution of this file, with or without modification,
// are permitted in any medium without royalty provided the copyright
// notice and this notice are preserved. This file is offered as-is,
// without any warranty.
//
// This is a non-interactive narrative from the original Curveship,
// Curveshippy 0.5, also available in the Python 3 version, Curveshippy 0.6.

var metadata = {
    title: "oh no, my teeth",
    author: "Trudy Painter",
    date: "2020",
    instructions: "",
    examples: ""
};

// PLACES first
place.party = new Place("a", "party");
place.helpful_man_pocket = new Place("the", "helpful man's pocket", spatial.of, actor.helpful_man);
place.speaker_mouth = new Place("the", "speaker's mouth", spatial.of, actor.speaker);

// place.vestibule.addView(place.lobby, "out in the lobby");
// place.lobby.addView(place.vestibule, "inside the vestibule");
// place.guardPost.addView(place.lobby, "through the one-way mirror");

// ACTORS next
actor.speaker = new Actor("a", "speaker", spatial.in, place.party, pronoun.feminine);
actor.helpful_man = new Actor("a", "helpful man", spatial.in, place.party, pronoun.masculine);

// THINGS next
thing.original_teeth = new Thing("a", "false teeth", spatial.of, actor.speaker);
thing.original_teeth.owner = actor.speaker

thing.speech = new Thing("a", "speech", spatial.of, actor.speaker);
thing.speech.owner = actor.speaker

thing.large_teeth = new Actor("some", "large false teeth");
thing.large_teeth.number = 2;
thing.tight_teeth = new Thing("some", "small false teeth");
thing.tight_teeth.number = 2;
thing.perfect_teeth = new Thing("some", "medium sized false teeth");
thing.perfect_teeth.number = 2;

// Finally, EVENTS
var speaker_forgets_teeth = new Event(actor.speaker, "forget", thing.original_teeth);
var speaker_arrive = new Event(actor.speaker, "arrive at", place.party);

clock += 50;

var speaker_asks_help = new Event(actor.speaker, "ask", actor.helpful_man, "for assistance.");
var helpful_man_offers_large = new Event(actor.helpful_man, "offer", thing.large_teeth);
var speaker_puts_on_large_teeth = new Event(actor.speaker, "takes", thing.large_teeth);
speaker_puts_on_large_teeth.setTemplate("[agent/s] [put/v] [object/o] on.");

clock += 50;

var speaker_reviews_large = new Event(actor.speaker, "find", thing.large_teeth);
speaker_reviews_large.setTemplate("[agent/s] [find/v] [object/o] too tight.");
var helpful_man_offers_small = new Event(actor.helpful_man, "offer", thing.tight_teeth);
var speaker_puts_on_small_teeth = new Event(actor.speaker, "put", thing.tight_teeth);
speaker_puts_on_small_teeth.setTemplate("[agent/s] [put/v] [object/o] on.");

clock += 50;

var speaker_reviews_small = new Event(actor.speaker, "find", thing.tight_teeth);
speaker_reviews_small.setTemplate("[agent/s] [find/v] [object/o] too loose.");
var helpful_man_offers_perfect = new Event(actor.helpful_man, "offer", thing.perfect_teeth);
var speaker_puts_on_perfect_teeth = new Event(actor.speaker, "takes", thing.perfect_teeth);
speaker_puts_on_perfect_teeth.setTemplate("[agent/s] [put/v] [object/o] on.");
var speaker_reviews_perfect = new Event(actor.speaker, "say", thing.perfect_teeth, "are perfect!");
speaker_reviews_perfect.setTemplate("[agent/s] [find/v] [object/o] perfect!")

clock += 50;

var speaker_gives_speech = new Event(actor.speaker, "deliver", thing.speech);

clock += 100

var speaker_thanks_man = new Event(actor.speaker, "say 'Thank you. I have been looking for a new dentist.'");
var man_responds = new Event(actor.helpful_man, "say 'I'm not a dentist. I work at the morgue.'");

var world = new World(place, actor, thing, eventSeq);

function run() {
    var spin = getParameters(world.actor);
    narrate(metadata, spin, world);
};