---
layout: post
title: Return to 3d Printing
description: Upgrades
date: 2023-09-13 18:20:53
image: "/images/posts/3d-printing/x1-cc-best_1800x1800.png"
tags: [3d printing, bambu, makers, 3d-Printing, printables]
---

## Introduction

I've been thinking about picking up some new 3d printers for awhile now as my
[FlashForge Creator
Pros](http://fusion94.org/2015/09/10/flashforge-creator-pro/) are starting to
show their age and one just doesn't print at all anymore.

Getting new printers (other than having a up-to-date platform) serves a few
purposes for me.

For one, Patrick is getting to the age (10) where he's spending a lot of time on
his smartphone and in games. I hope to use 3d Printing to teach him new skills,
empower his creativity, make family memories, and teach him a world of science
and design.

So I did a little bit of research and decided to go with a [Creality Ender 3 S1
Pro](https://www.creality.com/products/creality-ender-3-s1-pro-fdm-3d-printer).

## Enter Creality

Overall, it's been a great printer with regards to ease of unboxing/installation
as well as the overall quality of the prints w/o any tuning whatsoever. It was
truly the easiest printer I've ever assembled. IIRC it was literally 11 bolts.
Dead Simple.

### Some of the key features are:

- Print size: 220 x 220 x 270 mm
- Up to 300°C high-temp printing
- Full-metal dual-gear direct extruder
- CR-touch automatic leveling
- 4.3″ display
- Easy to assemble

With regards to setup and tuning? Straight out of the box it's an amazing
printer. Here are a couple of shots of it as well as some of the initial prints:

  <div class="gallery-box">
    <div class="gallery">
      <img src="/images/posts/3d-printing/creality-ender-3.jpg">
      <img src="/images/posts/3d-printing/ce3-print-1.jpg">
      <img src="/images/posts/3d-printing/ce3-print-2.jpg">
      <img src="/images/posts/3d-printing/ce3-print-3.jpg">
    </div>
    <em>Gallery / Creality</em>
  </div>

Having said that, after doing some additional research I ended up reading a ton
of reviews and watching many, many YouTube videos about the Bambu X1-Carbon. Due
to some of these reviews I bit the bullet and pulled the trigger on one.

## Enter Bambu

I purchased a [Bambu X1-Carbon
Combo](https://store.bambulab.com/products/x1-carbon-combo) on 7/17/2023 and it
arrived via UPS on 7/20/2023. It sat in it's box for a few days until I could
find time for the assembly.

The printer is shipped in a pretty large cardboard box, with foam protection on
the sides. The printer is packed well so I didn't expect any kind of damage
during shipping. It can be easily taken out from the package by simply pulling
from the sides of the plastic bag (But do take care here as plastic bags have a
tendency to rip and tear).

While the printer comes pre-assembled (mostly); before you can start printing
you will need to remove a few screws that hold some parts in place during
shipping. If you purchased the AMS unit you will also need to remove it from the
printer's enclosure via a few additional screws.

You will also need to attach the touchscreen to the printer via a supplied
ribbon cable.

Overall the assembly process took longer than the Creality Ender 3 S1 Pro but
will still under an hour and signficantly easier that other printers that I've
owned in the past.

### Some of the Key features and improvements:

- Large 256mm x 256mm x 256mm Build Volume
- Compatible Printing Materials Up to 300°C
- Built-In Camera Monitoring
- Compatible with Abrasive Filaments (NylonX, NylonG, etc.)
- Capable of Multi-Color and Multi-Material 3D Printing
  - Up to 16 colors printing
- High quality printing with 7 μm Lidar Resolution
- High speed CoreXY with 20000 mm/s² Acceleration
- Dual Auto Bed Leveling
- AI inspected first layer
- Spaghetti failure detection

Here is some feedback and a few thoughts after owning the Bambu for a few
months.

#### 1) It's very fast.

Very very fast. I did a large sample print as a reference
[wall-honeycomb-part.stl](https://www.printables.com/model/152592-honeycomb-storage-wall/files#preview:file-QLLx0)
and the Bambu was approximately 240.63% faster than the Creality Ender 3 S1
Pro.

| Printer  | Total Time | Time in Minutes |
| -------- | :--------: | --------------: |
| Bambu    |   1h 36m   |              96 |
| Creality |   5h 27m   |             327 |

#### 2) It's slow.

By this I mean it's not slow at printing it's slow at getting ready to print. On
average about 7.3% of the total print time is in setup or prep. i.e. homing the
bed and leveling, checking resonance, calibrating input shaping and pressure
advance for extrusion. This also doesn't account for bed and nozzle heating.

#### 3) Extruder/Hot End swap

Changing the hotend/extruder on the Creality is as simple as grabbing a wrench,
untightening the exiting nozzle and tightening the new nozzle. As Bambu uses a
completely integrated hotend/extruder it's slightly more complicated. Here's how
that works:

##### Removal

1. Go to the Temperature/Axis settings and make sure your hotend temperature is
   at 30c or below, then turn the power OFF
2. Open the magnetic cover and move it aside
3. Gently remove the bigger 2-pin plug of the ceramic heater, the 4-pin plug of
   the cooling fan and the very small 2-pin plug of the thermistor
4. Use the H2 Allen key to unscrew the 2 screws that are near the top of the
   nozzles' heatsink
5. Carefully and gently move the wires out of the plastic wire clip and remove
   the complete hotend assembly

##### Installation

1. Position the complete hotend assembly so that the 2 screw holes will be
   behind the bracket
2. Gently push the 2 screws in and then tighten them equally (but careful not to
   overtighten)
3. Plug in the bigger 2-pin ceramic heater plug, the 4-pin cooling fan plug, and
   the very small 2-pin thermistor plug
4. Route all the loose cables through the plastic wire clip
5. Replace the magnetic cover… and you are done!!!

As I said, slightly more complicated but not completely horrible.

#### 4) Build Plates

By default the Bambu X1-C comes with both the Bambu Cool Plate and a Bambu
Engineering Plate which is going to require the use of a glue stick or painter's
tape to ensure great adhesion. The Creality Ender 3 S1 Pro by default came with
a spring steel textured PEI plate which is far superior. If you chose to pick up
a Bambu X1-C then you should (at the time of purchase) add on a [Bambu Textured
PEI Plate](https://us.store.bambulab.com/products/bambu-textured-pei-plate) as
well. Trust me it's worth the $37.99 USD.

#### 5) Filaments

The Bambu X1-C comes with some starter filament. One of the things I love about
the AMS unit is the ability to read and register filament via RFID.
Unfortunately this is only available through the use of Bambu Filaments.

Initially the price of Bambu filaments versus say Polymaker there appears to be
a $3 to $4 difference per kg. While this might be a problem for some I've not
found it to be a showstopper due to the aforementioned RFID tagging for
filament.

A few other things to note is that once you have a few empty spools or order the
empty spools from Bambu for the most part you should be ordered filament via the
refill option which brings the prices inline with Polymaker. The process of
refilling a spool takes 3-4 minutes and requires no tools or winders.

Filament orders can only happen through the Bambu Store, there is no Amazon
option (booooooo) and shipping options (via FedEx) can take up to 10 days so
plan accordingly. I think my second filament order was in the neighborhood of
30kgs and somewhere around $750 USD but I didn't have to order filament for a
few more months.

## Final Thoughts

I liked my original Bambu X1-C so much that I ending up purchasing a second unit
as well.

I earnestly believe that the Bambu X1-C printer delivers commercial quality at a
consumer price point and it's well worth the cost.

Here is a photo gallery of some of the prints from the Bambu X1-C:

  <div class="gallery-box">
    <div class="gallery">
      <img src="/images/posts/3d-printing/bambu-1.JPG">
      <img src="/images/posts/3d-printing/bambu-2.JPG">
      <img src="/images/posts/3d-printing/bambu-3.JPG">
      <img src="/images/posts/3d-printing/bambu-4.JPG">
      <img src="/images/posts/3d-printing/bambu-5.JPG">
      <img src="/images/posts/3d-printing/bambu-6.JPG">
      <img src="/images/posts/3d-printing/bambu-7.JPG">
      <img src="/images/posts/3d-printing/bambu-8.JPG">
      <img src="/images/posts/3d-printing/bambu-9.JPG">
      <img src="/images/posts/3d-printing/bambu-10.JPG">    
    </div>
    <em>Gallery / Bambu X1-C Prints</em>
  </div>

I can certainly state the experience now days is significantly better than when
I put my first 3D Printer together, a Prusa Mendel that is show below.

![Prusa Mendel](/images/posts/3d-printing/prusa-mendel.png "Prusa Mendel")

For reference that mendel was put together in 2011 and the printable parts were
printed using a Makerbot Cupcake CNC from 2009.

And now for some gratuitous photos of that Cupcake CNC

  <div class="gallery-box">
    <div class="gallery">
      <img src="/images/posts/3d-printing/cupcake-1.jpeg">
      <img src="/images/posts/3d-printing/cupcake-2.jpeg">
      <img src="/images/posts/3d-printing/cupcake-3.jpeg">
      <img src="/images/posts/3d-printing/cupcake-4.jpeg">
      <img src="/images/posts/3d-printing/cupcake-5.jpeg">
    </div>
    <em>Gallery / Makerbot Cupcake CNC</em>
  </div>
