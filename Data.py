

import random

import cassiopeia as cass

# SaFeTy FiRsT
def get_apikey():
    f = open(".gitignore", "r")
    key = f.read()
    return key


cass.set_riot_api_key(get_apikey())  # This overrides the value set in your configuration/settings.


Moussa = cass.get_summoner(name="Moussa#77777", region="EUN1")
print("{name} is a summoner on the {region} server.".format(name=Moussa.name, region=Moussa.region))

print(Moussa.champion_masteries)
