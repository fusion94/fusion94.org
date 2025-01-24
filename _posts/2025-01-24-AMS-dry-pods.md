---
layout: post
title: AMS Humidity Control
description: Maintaining Humidity in your AMS
image: "/images/posts/3d-printing/ams.png"
tags: [3d printing, bambu, makers, 3d-Printing, ams]
date: 2025-01-24 04:56 -0500
---
## Bambu Lab's Automatic Material System and the Importance of Humidity Control

The Bambu Lab Automatic Material System (AMS) revolutionizes 3D printing by
streamlining filament management for multi-material and multi-color projects.
Designed to work seamlessly with Bambu Lab's advanced 3D printers, the AMS
automates filament swapping and ensures precise material handling, eliminating
manual intervention during complex prints. With its smart storage and
compatibility with various filament types, it enhances productivity and reduces
the risk of errors, making it an essential tool for professionals and hobbyists
alike.

A feature of the AMS is its focus on humidity control, a critical factor in
maintaining filament quality. It does this by utilizing an air-tight seal and
with the help of dessicant material, it absorbs moisture to keep the moisture
away from filament.

A Humidity Sensor also detects the humidity inside the AMS and provides
information to the user when the humidity is higher or the dessicant may need to
be replaced.

![AMS Insides](/images/posts/3d-printing/ams-inside.png "AMS Insides")

## Why Minimize Humidity?

Humidity can wreak havoc on filament properties. When filaments absorb moisture,
several issues can arise during printing. Moisture-laden filaments can lead to
poor adhesion between layers, causing warping or misshaping of the final print.
Additionally, when moisture in the filament is heated during the printing
process, it turns into steam, creating tiny bubbles or voids in the extruded
material, which severely affects the strength and aesthetics of the print.

## The Science Behind Humidity Impact

At a microscopic level, moisture impacts the filament's viscosity during the
melting process. This alteration can lead to inconsistent extrusion rates, which
are critical for precision in 3D printing. Filaments like PLA, PETG, and especially
hygroscopic materials like Nylon or TPU can absorb moisture from the air,
leading to compromised prints, such as stringing, bubbling, or weak layer
adhesion.

## Improvements

Although the AMS system performs well in maintaining a consistent and steady
humidity level, there is still room for improvement to optimize its performance.
While it effectively handles standard conditions, certain scenarios or
environmental factors may expose limitations in its ability to maintain ideal
humidity levels.

One of the most significant issues I’ve noticed is that the desiccant used (and
sold by Bambu) isn’t rechargeable. To be frank, it’s not particularly effective
either. Each AMS unit relies on two desiccant packs, which, in my experience,
only last about a month—even in a relatively dry environment. And did I mention
they’re not rechargeable? This is because the desiccant is made from calcium
chloride (**CaCl<sub>2</sub>**), which inherently lacks the ability to be
regenerated for repeated use.

> Calcium chloride is an inorganic compound – a salt with the chemical formula
> CaCl<sub>2</sub>. It is white flakes or pellets at room temperature, and is highly
> soluble in water.

Enter [AMS DryPods](https://makerworld.com/en/models/158496#profileId-173988)
designed by [mcmaven](https://makerworld.com/en/@mcmaven). With over 28k
downloads it's one of the best solutions out there.

What are DryPods you might be asking? DryPods are compact desiccant packs
designed to absorb moisture and reduce humidity in enclosed spaces. DryPods
typically contain a hygroscopic material, such as silica gel or calcium
chloride, which attracts and traps moisture from the air. Depending on their
design, some DryPods are reusable and can be recharged by heating to expel
absorbed moisture, while others are single-use and need replacement after
becoming saturated.

These DryPods are 3d printable and contain printable desiccant trays as well as
desiccant containers that slide inbetween the first stage feeder motors. The
containers come in several variations to include Wide DryPod options that can
hold hygrometers.

- For Bambu or compatible Round Hygrometer with vertical or 30 degree tabs,
  with a hole all the way through it, which should generate more accurate
  measurements. A 42mm diameter x 14mm deep body and a 46mm diameter bezel is
  supported. (Default on Plate 1.)
- For Bambu or compatible Round Hygrometer with a shallow hole for the
  hygrometer, which allows the DryPod hold more desiccant, but may be less
  accurate in measuring the overall humidity level of the AMS. A 42mm diameter x
  14mm deep body and a 46mm diameter bezel is supported. (Floating).
- For the Bambu Rectangular Hygrometer.  A 45x26x15mm body and a 48x29mm bezel
  is supported. (Floating).
- For the Xiaomi Bluetooth Thermometer Hygrometer. A 43x43x12.5 mm body is
  supported.(Floating).

The integration of a hygrometer in the AMS DryPods setup allows for real-time
monitoring of the humidity levels. This precision ensures that the environment
within the DryPod remains at an ideal humidity level, often recommended to be
below 15% for most materials.

There are also smaller containers (narrower) that can be slotted on the outside
of the feeder motors.

With fresh desiccant, the humidity dropped to 10% (Level 1) within a few hours
and remained as low as 20% (Level 2) even after six months.

Stefan from CNC Kitchen has created an excellent and detailed video exploring
the different types of desiccants, their pros and cons, and various methods for
drying them. While he focuses heavily on filament bags, the drying techniques he
explains are equally applicable to loose desiccant. It’s an insightful resource
for anyone looking to optimize moisture control.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/6tHInlFfMcM?si=GHvj8z9lFUF0ORSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>
<br>

## Conclusion

The integration of systems like the Bambu Lab AMS with advanced humidity
controls such as DryPods using rechargeable desiccant highlights the growing
sophistication of 3D printing technology. By tackling the critical issue of
humidity's impact on filaments, Bambu Lab is setting a new standard for
reliability and efficiency in 3D printing. These innovations empower both
enthusiasts and professionals to achieve higher-quality results with greater
consistency. As the industry continues to evolve, systems like these are likely
to become essential tools in the world of additive manufacturing.

### Stuff I use

- [Hygrometer](https://www.amazon.com/gp/product/B07GR67G1M/?th=1)
- [Dry & Dry Silica Beads](https://www.amazon.com/gp/product/B013L31PQ0/?th=1)
