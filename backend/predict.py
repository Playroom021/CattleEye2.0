import tensorflow as tf
# import tflite_runtime.interpreter as tf
import numpy as np
import json

MODEL = tf.keras.models.load_model(
    "models/cattle_model03.keras"
)

with open("models/labels.json") as f:
    LABELS = json.load(f)


def predict_image(img):

    img = tf.image.resize(
        img,
        (224, 224)
    )

    img = np.expand_dims(
        img,
        axis=0
    )

    pred = MODEL.predict(img)

    idx = np.argmax(pred)

    result = {

        "breed":
        LABELS[idx],

        "confidence":
        float(
            pred[0][idx] * 100
        )

    }

    return result

