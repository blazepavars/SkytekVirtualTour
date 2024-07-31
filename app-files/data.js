var APP_DATA = {
  "scenes": [
    {
      "id": "0-skytek-lobby",
      "name": "Skytek Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.254321448159855,
          "pitch": 0.28239019095856577,
          "rotation": 6.283185307179586,
          "target": "1-skytek-reception"
        },
        {
          "yaw": -3.0156369877308915,
          "pitch": 0.37333726899877817,
          "rotation": 7.0685834705770345,
          "target": "18-skytek-cafeteria-seating-area"
        },
        {
          "yaw": 2.6293416901517643,
          "pitch": 0.4431887273715649,
          "rotation": 4.71238898038469,
          "target": "37-skytek-mens-washroom-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2611261527739863,
          "pitch": -0.027511452233451195,
          "title": "Reception",
          "text": ""
        }
      ]
    },
    {
      "id": "1-skytek-reception",
      "name": "Skytek Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.046685258180852784,
        "pitch": 0.029540773980196278,
        "fov": 1.5102453087931906
      },
      "linkHotspots": [
        {
          "yaw": -3.001006412381832,
          "pitch": 0.29472277293263005,
          "rotation": 0,
          "target": "0-skytek-lobby"
        },
        {
          "yaw": 1.0553619222027688,
          "pitch": 0.4954430640211207,
          "rotation": 0,
          "target": "2-skytek-reception-west-wing"
        },
        {
          "yaw": -1.660164930208806,
          "pitch": 0.3294518882248294,
          "rotation": 0,
          "target": "3-skytek-receptionist-east-wing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-skytek-reception-west-wing",
      "name": "Skytek Reception West Wing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.746427258162079,
        "pitch": 0.17979797652196794,
        "fov": 1.5102453087931906
      },
      "linkHotspots": [
        {
          "yaw": 1.5592226185871478,
          "pitch": 0.2765544228470045,
          "rotation": 0,
          "target": "4-skytek-inner-west-wing"
        },
        {
          "yaw": -1.732933292968081,
          "pitch": 0.5201081804413263,
          "rotation": 0,
          "target": "1-skytek-reception"
        },
        {
          "yaw": -2.31603310467597,
          "pitch": 0.2221375961779266,
          "rotation": 0,
          "target": "0-skytek-lobby"
        },
        {
          "yaw": -1.8591975028905026,
          "pitch": 0.19165617582259742,
          "rotation": 0,
          "target": "3-skytek-receptionist-east-wing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-skytek-receptionist-east-wing",
      "name": "Skytek Receptionist East Wing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.32955895773490695,
        "pitch": 0.4204786031425325,
        "fov": 1.5102453087931906
      },
      "linkHotspots": [
        {
          "yaw": 2.9005683091279444,
          "pitch": 0.32952980477290694,
          "rotation": 0,
          "target": "1-skytek-reception"
        },
        {
          "yaw": -0.1332283401166361,
          "pitch": 0.4444873619211034,
          "rotation": 0,
          "target": "32-skytek-east-south-wing-t-junction"
        },
        {
          "yaw": 1.3495610636030086,
          "pitch": 0.6414651051689937,
          "rotation": 0,
          "target": "33-skytek-copy-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-skytek-inner-west-wing",
      "name": "Skytek Inner West Wing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.8617394016093094,
        "pitch": 0.20804232537918033,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 2.984713329510811,
          "pitch": 0.2468510371221022,
          "rotation": 0,
          "target": "2-skytek-reception-west-wing"
        },
        {
          "yaw": -0.8823829810291866,
          "pitch": 0.4341290888926608,
          "rotation": 0,
          "target": "5-skytek-west-south-wing-beginning"
        },
        {
          "yaw": -1.0500254107949214,
          "pitch": 0.24074280694892813,
          "rotation": 5.497787143782138,
          "target": "16-skytek-emerald-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-skytek-west-south-wing-beginning",
      "name": "Skytek West South Wing Beginning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.09148283185593442,
        "pitch": 0.5521264746994881,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 1.854640953930482,
          "pitch": 0.37509135321662335,
          "rotation": 7.853981633974483,
          "target": "4-skytek-inner-west-wing"
        },
        {
          "yaw": 2.7733092769548158,
          "pitch": 0.36553270668678906,
          "rotation": 3.141592653589793,
          "target": "6-skytek-kitchen"
        },
        {
          "yaw": -0.3763348982169923,
          "pitch": 0.2433898134085446,
          "rotation": 0,
          "target": "7-skytek-west-south-wing-middle"
        },
        {
          "yaw": 1.1811018508575248,
          "pitch": 0.28919724409862724,
          "rotation": 0,
          "target": "15-skytek-inner-west-wing-south"
        },
        {
          "yaw": -1.1672262916542344,
          "pitch": 0.6271197963227149,
          "rotation": 5.497787143782138,
          "target": "16-skytek-emerald-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4899402504298607,
          "pitch": -0.2533035948155806,
          "title": "Emerald Room",
          "text": "View of ____<div><br></div><div>Holds X amount of People</div><div><br></div><div>More Details..</div>"
        },
        {
          "yaw": 2.7973056146249773,
          "pitch": -0.13736754038395027,
          "title": "Kitchen",
          "text": ""
        }
      ]
    },
    {
      "id": "6-skytek-kitchen",
      "name": "Skytek Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.5067339454600397,
        "pitch": 0.1376234227157127,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -0.011729606400111336,
          "pitch": 0.517673511189825,
          "rotation": 0,
          "target": "5-skytek-west-south-wing-beginning"
        },
        {
          "yaw": 0.0025487948580540376,
          "pitch": 0.21608109825243105,
          "rotation": 0,
          "target": "7-skytek-west-south-wing-middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-skytek-west-south-wing-middle",
      "name": "Skytek West South Wing Middle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.11540411705859732,
        "pitch": 0.17930266070027834,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 3.0434213850848373,
          "pitch": -0.019930807325639677,
          "rotation": 0,
          "target": "6-skytek-kitchen"
        },
        {
          "yaw": 2.9426425065844057,
          "pitch": 0.14482452614106656,
          "rotation": 0,
          "target": "5-skytek-west-south-wing-beginning"
        },
        {
          "yaw": -0.12179532740916521,
          "pitch": 0.40951748755968254,
          "rotation": 0,
          "target": "8-skytek-west-south-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-skytek-west-south-corner",
      "name": "Skytek West South Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.3817460187801682,
        "pitch": 0.1174570047053578,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 3.064866777121969,
          "pitch": 0.2198157232503668,
          "rotation": 0,
          "target": "7-skytek-west-south-wing-middle"
        },
        {
          "yaw": 3.056675529271873,
          "pitch": -0.08403149400983523,
          "rotation": 0,
          "target": "6-skytek-kitchen"
        },
        {
          "yaw": 1.4933986875985035,
          "pitch": 0.42347355921888763,
          "rotation": 0,
          "target": "9-skytek-outer-west-wing-12"
        },
        {
          "yaw": 1.4640524030641284,
          "pitch": 0.11994243968190688,
          "rotation": 0,
          "target": "11-skytek-west-north-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-skytek-outer-west-wing-12",
      "name": "Skytek Outer West Wing 1/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.09531139071937567,
        "pitch": 0.053085512900459264,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 3.0466051185348633,
          "pitch": 0.15049015489604223,
          "rotation": 0,
          "target": "8-skytek-west-south-corner"
        },
        {
          "yaw": -0.014560634265926353,
          "pitch": 0.4724531271654371,
          "rotation": 0,
          "target": "10-skytek-outer-west-wing-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-skytek-outer-west-wing-22",
      "name": "Skytek Outer West Wing 2/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1133498375787525,
          "pitch": 0.23106147664467613,
          "rotation": 0,
          "target": "9-skytek-outer-west-wing-12"
        },
        {
          "yaw": -0.018826811159913248,
          "pitch": 0.38170224168987943,
          "rotation": 0,
          "target": "11-skytek-west-north-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-skytek-west-north-corner",
      "name": "Skytek West North Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.7189656117957366,
        "pitch": 0.19591894322234893,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 1.618889269771886,
          "pitch": 0.4055437114026077,
          "rotation": 0,
          "target": "10-skytek-outer-west-wing-22"
        },
        {
          "yaw": 1.5727933031909656,
          "pitch": 0.10904697997398038,
          "rotation": 0,
          "target": "8-skytek-west-south-corner"
        },
        {
          "yaw": -0.031224139198096523,
          "pitch": 0.324859160112311,
          "rotation": 0,
          "target": "12-skytek-west-north-wing-middle-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-skytek-west-north-wing-middle-12",
      "name": "Skytek West North Wing Middle 1/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.11717298873949389,
        "pitch": 0.2638540816633359,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 3.1300334504585567,
          "pitch": 0.14931396159556876,
          "rotation": 0,
          "target": "11-skytek-west-north-corner"
        },
        {
          "yaw": -0.008963714969043579,
          "pitch": 0.3640661796757456,
          "rotation": 0,
          "target": "13-skytek-west-north-middle-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-skytek-west-north-middle-22",
      "name": "Skytek West North Middle 2/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.8678044582529836,
        "pitch": 0.17375618324718367,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 3.105630548897688,
          "pitch": 0.14145635433780157,
          "rotation": 0,
          "target": "12-skytek-west-north-wing-middle-12"
        },
        {
          "yaw": 1.6361118714356202,
          "pitch": 0.1707544495224731,
          "rotation": 0,
          "target": "14-skytek-inner-west-wing-north"
        },
        {
          "yaw": 0.08167796894728951,
          "pitch": 0.27435314078325845,
          "rotation": 0,
          "target": "17-skytek-north-middle-wing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-skytek-inner-west-wing-north",
      "name": "Skytek Inner West Wing North",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1111818182317172,
          "pitch": 0.1340753226381075,
          "rotation": 0,
          "target": "13-skytek-west-north-middle-22"
        },
        {
          "yaw": 0.040322660898379326,
          "pitch": 0.43121852987871634,
          "rotation": 0,
          "target": "15-skytek-inner-west-wing-south"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-skytek-inner-west-wing-south",
      "name": "Skytek Inner West Wing South",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.140371888572046,
          "pitch": 0.03516638003360484,
          "rotation": 0,
          "target": "14-skytek-inner-west-wing-north"
        },
        {
          "yaw": -0.17116718645112172,
          "pitch": 0.6833555525892017,
          "rotation": 0,
          "target": "5-skytek-west-south-wing-beginning"
        },
        {
          "yaw": 0.027509431711202126,
          "pitch": 0.2843685950696013,
          "rotation": 0,
          "target": "16-skytek-emerald-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-skytek-emerald-room",
      "name": "Skytek Emerald Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.5575795917929476,
        "pitch": 0.35490035365020844,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -2.1089268175557248,
          "pitch": 0.4678128453707764,
          "rotation": 0,
          "target": "5-skytek-west-south-wing-beginning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-skytek-north-middle-wing",
      "name": "Skytek North Middle Wing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.071685935614207,
        "pitch": 0.3383938959845665,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 2.629669392292845,
          "pitch": -0.023269874657170675,
          "rotation": 0,
          "target": "13-skytek-west-north-middle-22"
        },
        {
          "yaw": 0.9841263190793583,
          "pitch": 0.7177137156652336,
          "rotation": 0,
          "target": "18-skytek-cafeteria-seating-area"
        },
        {
          "yaw": -0.4824984966027195,
          "pitch": 0.6051542414209017,
          "rotation": 0,
          "target": "20-skytek-east-north-middle-wing-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-skytek-cafeteria-seating-area",
      "name": "Skytek Cafeteria Seating Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.181434683660708,
        "pitch": -0.0616700438741411,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 0.07091416525039307,
          "pitch": 0.85514272587573,
          "rotation": 0,
          "target": "17-skytek-north-middle-wing"
        },
        {
          "yaw": -1.770538635128304,
          "pitch": 0.24309203761976228,
          "rotation": 3.9269908169872414,
          "target": "19-skytek-cafeteria-countertop"
        },
        {
          "yaw": -2.418248787133633,
          "pitch": 0.07206767672434822,
          "rotation": 0.7853981633974483,
          "target": "0-skytek-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-skytek-cafeteria-countertop",
      "name": "Skytek Cafeteria Countertop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.793775327394256,
        "pitch": 0.1925448250795725,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -3.0671515726860896,
          "pitch": 0.3256648484535578,
          "rotation": 0,
          "target": "18-skytek-cafeteria-seating-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-skytek-east-north-middle-wing-12",
      "name": "Skytek East North Middle Wing 1/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.089097546573175,
          "pitch": 0.06253224988307338,
          "rotation": 0,
          "target": "17-skytek-north-middle-wing"
        },
        {
          "yaw": 0.05820455280371917,
          "pitch": 0.431745009831765,
          "rotation": 0,
          "target": "21-skytek-east-north-middle-wing-22"
        },
        {
          "yaw": 3.113694892987831,
          "pitch": 0.16477671494922852,
          "rotation": 4.71238898038469,
          "target": "18-skytek-cafeteria-seating-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-skytek-east-north-middle-wing-22",
      "name": "Skytek East North Middle Wing 2/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.036126797520974,
          "pitch": 0.32312561949584584,
          "rotation": 0,
          "target": "20-skytek-east-north-middle-wing-12"
        },
        {
          "yaw": 3.0249988326389516,
          "pitch": 0.06790208472820325,
          "rotation": 4.71238898038469,
          "target": "18-skytek-cafeteria-seating-area"
        },
        {
          "yaw": -0.1020642242923202,
          "pitch": 0.3168541060076002,
          "rotation": 0,
          "target": "22-skytek-east-north-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-skytek-east-north-corner",
      "name": "Skytek East North Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.25525850241406,
        "pitch": 0.046157866487707366,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -1.5624736655371763,
          "pitch": 0.31321976276434604,
          "rotation": 12.566370614359176,
          "target": "21-skytek-east-north-middle-wing-22"
        },
        {
          "yaw": -3.020707221899645,
          "pitch": 0.300592048899178,
          "rotation": 0,
          "target": "23-skytek-outer-east-wing-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-skytek-outer-east-wing-12",
      "name": "Skytek Outer East Wing 1/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.1409829232356934,
        "pitch": 0.06897492350804946,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -0.006278481902809219,
          "pitch": 0.36846992355281216,
          "rotation": 0,
          "target": "22-skytek-east-north-corner"
        },
        {
          "yaw": -3.0963427922592768,
          "pitch": 0.3836677836374367,
          "rotation": 0,
          "target": "24-skytek-outer-east-wing-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-skytek-outer-east-wing-22",
      "name": "Skytek Outer East Wing 2/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.0883837846880864,
        "pitch": -0.06149744098913423,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -0.044040957641028555,
          "pitch": 0.3788078363384706,
          "rotation": 0,
          "target": "23-skytek-outer-east-wing-12"
        },
        {
          "yaw": 3.1305661415390045,
          "pitch": 0.2915994068709722,
          "rotation": 0,
          "target": "25-skytek-outer-east-t-junction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-skytek-outer-east-t-junction",
      "name": "Skytek Outer East T-Junction",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.302171625718408,
        "pitch": 0.03234298507862121,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 3.0682868060267587,
          "pitch": 0.20842081383957556,
          "rotation": 0,
          "target": "26-skytek-east-south-corner-right"
        },
        {
          "yaw": -0.07327893578016997,
          "pitch": 0.3657401264129039,
          "rotation": 0,
          "target": "24-skytek-outer-east-wing-22"
        },
        {
          "yaw": -1.6879303978239637,
          "pitch": 0.47653075017178637,
          "rotation": 3.141592653589793,
          "target": "35-skytek-inner-east-wing-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-skytek-east-south-corner-right",
      "name": "Skytek East South Corner (Right)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.0288198163121436,
        "pitch": 0.2087967241283124,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -0.07937323737380808,
          "pitch": 0.4764736153554239,
          "rotation": 6.283185307179586,
          "target": "25-skytek-outer-east-t-junction"
        },
        {
          "yaw": -1.6721406205907066,
          "pitch": 0.404562545145863,
          "rotation": 0,
          "target": "27-skytek-east-south-wing-middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-skytek-east-south-wing-middle",
      "name": "Skytek East South Wing Middle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.292054363988969,
        "pitch": 0.10996556862993678,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -2.941873973885386,
          "pitch": 0.3008491726792233,
          "rotation": 0,
          "target": "26-skytek-east-south-corner-right"
        },
        {
          "yaw": 0.16586059976987144,
          "pitch": 0.25950004917317493,
          "rotation": 0,
          "target": "28-skytek-east-south-corner-left"
        },
        {
          "yaw": 0.15049103502278527,
          "pitch": 0.4126503369994552,
          "rotation": 4.71238898038469,
          "target": "36-skytek-office-suite-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-skytek-east-south-corner-left",
      "name": "Skytek East South Corner (Left)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.4437638794099765,
        "pitch": 0.12298669777132609,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -3.1261403207932617,
          "pitch": 0.12767172268811322,
          "rotation": 0,
          "target": "27-skytek-east-south-wing-middle"
        },
        {
          "yaw": 1.241011290845579,
          "pitch": 0.7806848098733017,
          "rotation": 12.566370614359176,
          "target": "29-skytek-sapphire-room-entrance"
        },
        {
          "yaw": 0.8029610971612158,
          "pitch": 0.5824294382016806,
          "rotation": 4.71238898038469,
          "target": "30-skytek-sapphire-room"
        },
        {
          "yaw": -2.9862310674231427,
          "pitch": 0.39753862883052804,
          "rotation": 1.5707963267948966,
          "target": "36-skytek-office-suite-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-skytek-sapphire-room-entrance",
      "name": "Skytek Sapphire Room Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.6638180485080198,
        "pitch": 0.1505584359001162,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -1.4793452820034787,
          "pitch": 0.916704567852749,
          "rotation": 4.71238898038469,
          "target": "28-skytek-east-south-corner-left"
        },
        {
          "yaw": -0.12932260611577284,
          "pitch": 0.7287418608751768,
          "rotation": 0,
          "target": "30-skytek-sapphire-room"
        },
        {
          "yaw": 1.4176415956441435,
          "pitch": 0.491867450165401,
          "rotation": 0,
          "target": "31-skytek-inner-east-south-wing-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-skytek-sapphire-room",
      "name": "Skytek Sapphire Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.4940295231096652,
        "pitch": 0.08222013795239747,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -1.6823181604210866,
          "pitch": 0.6169628385878312,
          "rotation": 0,
          "target": "29-skytek-sapphire-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-skytek-inner-east-south-wing-12",
      "name": "Skytek Inner East South Wing 1/2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.05990418907438233,
        "pitch": 0.4198982039223331,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -2.530045640837404,
          "pitch": 0.5942463999117304,
          "rotation": 0,
          "target": "29-skytek-sapphire-room-entrance"
        },
        {
          "yaw": -2.174565268794721,
          "pitch": 0.48623997840783595,
          "rotation": 1.5707963267948966,
          "target": "30-skytek-sapphire-room"
        },
        {
          "yaw": 0.6554993276582088,
          "pitch": 0.6615220556144372,
          "rotation": 4.71238898038469,
          "target": "32-skytek-east-south-wing-t-junction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-skytek-east-south-wing-t-junction",
      "name": "Skytek East South Wing T-Junction",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.2704297313719408,
        "pitch": 0.12931157229590973,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -2.2466550182403093,
          "pitch": 0.33913977440216314,
          "rotation": 0,
          "target": "31-skytek-inner-east-south-wing-12"
        },
        {
          "yaw": -0.5786622227892035,
          "pitch": 0.521060240037194,
          "rotation": 0,
          "target": "3-skytek-receptionist-east-wing"
        },
        {
          "yaw": 2.4955306732692115,
          "pitch": 0.32071713546155856,
          "rotation": 0,
          "target": "34-skytek-inner-east-wing-beginning"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8110290667894855,
          "pitch": -0.1570915932459922,
          "title": "Copy Room",
          "text": ""
        }
      ]
    },
    {
      "id": "33-skytek-copy-room",
      "name": "Skytek Copy Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.9629168993717858,
        "pitch": 0.2783611522546501,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 2.4454057229086477,
          "pitch": 0.5280469347851255,
          "rotation": 0,
          "target": "3-skytek-receptionist-east-wing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-skytek-inner-east-wing-beginning",
      "name": "Skytek Inner East Wing Beginning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.3534004884242741,
        "pitch": 0.2909732028339036,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": 2.7245959085172764,
          "pitch": 0.20068663407569431,
          "rotation": 0,
          "target": "32-skytek-east-south-wing-t-junction"
        },
        {
          "yaw": -0.48250868785066814,
          "pitch": 0.5249454412609076,
          "rotation": 0,
          "target": "35-skytek-inner-east-wing-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-skytek-inner-east-wing-end",
      "name": "Skytek Inner East Wing End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.956541275858304,
          "pitch": -0.05849292734335698,
          "rotation": 3.141592653589793,
          "target": "34-skytek-inner-east-wing-beginning"
        },
        {
          "yaw": -0.2678191204090332,
          "pitch": 0.8867173931959975,
          "rotation": 6.283185307179586,
          "target": "25-skytek-outer-east-t-junction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-skytek-office-suite-3",
      "name": "Skytek Office Suite #3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1605511503071675,
          "pitch": 0.4390289882787073,
          "rotation": 10.995574287564278,
          "target": "28-skytek-east-south-corner-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-skytek-mens-washroom-entrance",
      "name": "Skytek Men's Washroom Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.116719552568364,
          "pitch": 0.12878857515514675,
          "rotation": 0,
          "target": "18-skytek-cafeteria-seating-area"
        },
        {
          "yaw": -0.08833328032070042,
          "pitch": 0.3898204076503955,
          "rotation": 0,
          "target": "38-skytek-emergency-exit-entrance"
        },
        {
          "yaw": -3.0671885076090533,
          "pitch": 0.26600923856406844,
          "rotation": 1.5707963267948966,
          "target": "0-skytek-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-skytek-emergency-exit-entrance",
      "name": "Skytek Emergency Exit Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.02447795590817492,
        "pitch": 0.16955992395357278,
        "fov": 1.4150926986742383
      },
      "linkHotspots": [
        {
          "yaw": -2.979321642876389,
          "pitch": 0.45242010364445484,
          "rotation": 0,
          "target": "37-skytek-mens-washroom-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
