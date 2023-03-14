import random
import matplotlib.pyplot as plt

trials = 1000

averages = []
rolls = [i for i in range(1,6)]

for roll in rolls:
    average = 0
    for _ in range(trials):
        defense = 0
        by_twos = 0
        for _ in range(roll):
            rando = random.randint(0,6)
            if (rando == 1) or (rando == 2):
                continue
            if (rando == 3) or (rando == 4):
                defense += 1
            if rando == 5:
                defense += 2
            if rando == 6:
                by_twos += 1
        for _ in range(by_twos):
            defense *= 2
        average += defense

    average /= trials
    averages.append(average)

fig, ax = plt.subplots()
ax.plot(rolls, averages)
fig.savefig("test.png")


