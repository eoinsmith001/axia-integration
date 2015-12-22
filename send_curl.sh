#!/bin/bash
# NB KEY env var is axia Source Key
curl -v -X POST \
             -d "UMkey=$KEY" \
             -d "UMcard=4000100011112224" \
             https://sandbox.axiaepay.com/gate.php
