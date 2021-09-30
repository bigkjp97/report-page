import json


class Config:
    def __init__(self, addr):
        self.addr = addr

    def read(self):
        with open(self.addr, 'r', encoding='utf-8') as f:
            config = json.load(f)
            return config
