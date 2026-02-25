import io
import os
import sys
import unittest
from unittest.mock import patch

from fastapi import HTTPException

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from src.endpoints.google_maps import geocode


class TestGoogleMapsGeocode(unittest.TestCase):
    @patch("src.endpoints.google_maps.urlopen")
    @patch.dict(os.environ, {"GOOGLE_MAPS_API_KEY": "test-key"})
    def test_returns_payload_when_google_call_succeeds(self, mocked_urlopen):
        mocked_urlopen.return_value.__enter__.return_value = io.StringIO('{"status":"OK"}')
        self.assertEqual(geocode("Oslo"), {"status": "OK"})

    @patch.dict(os.environ, {}, clear=True)
    def test_raises_when_api_key_is_missing(self):
        with self.assertRaises(HTTPException) as raised_error:
            geocode("Oslo")
        self.assertEqual(raised_error.exception.status_code, 500)


if __name__ == "__main__":
    unittest.main(verbosity=2)
