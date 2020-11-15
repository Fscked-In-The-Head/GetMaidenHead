# GetMaidenHead
Lightweight conversion of decimal coordinates to maidenhead locator  for ham radio purposes.
Written to work with bangle.js.
Most maidenhead calculators use only 6 characters of precision, which is only enough accuracy to determine a rough neighbourhood. That's fine for HF comms, but VHF can make use of extended accuracy. Eight characters brings that down to about a block, which is enough to meet someone when driving or on foot and sharing locators over radio. Ten would point at one building, and I may expand to that in the future.
